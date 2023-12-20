import { useEffect, useState } from "react"; //we import as a named import.
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData";//Now we are using live api data hence no need of resList hence we also delete mockData.js folder(/utils/mockData).

const Body=()=>{

    
 const [listOfRestaurents,setListOfRestaurents]= useState([]);//we intialize listOfRestaurents with empty array.because in starting we want blank page.
 const [filteredRestaurents,setFilteredRestaurents]=useState([]);//we create another state variable filteredRestaurents for only the filtered restaurents.
 
 const [isLoading, setIsLoading] = useState(true);//we introduce a new state variable called isLoading to track whether data is still being fetched. We set it to true initially and update it to false when the data is available. This ensures that the Shimmer component is displayed while the data is loading, and the restaurant list is displayed once the data is available. 

 const [searchText,setSearchText]=useState("")
//  useEffect is just an normal function which has two argumnets . 1st is arrow function(call-back function) and 2nd is dependencies Array.
/*When the useEffect callback function(arrow function) will call?
The callback function will call after your component render.*/
// If you want to do something after rendering the component then write it inside useEffect. 
/*How this body.js code executed?
As soon as body component render,body component render line by line . when it see useEffect it just save that callback fuction to call it after render . then move aheads.Once the render is done then it just call callback function.*/
 useEffect(()=>{
    fetchData();
 },[])

 const fetchData= async ()=>{
    //Calling Swiggy.com from localhost has been blocked due to CORS policy(basically our browser block us to call api from one origin to another origin. )
    //To Bypass CORS Error we use CORS Extension.
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7042912&lng=76.7104408&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

   const json= await data.json();//In json we all api data
   console.log(json);
   //Update listOfRestaurents by live data.
   //Optional Chaining:-This operator helps to avoid the "Cannot read property 'x' of undefined" or "Cannot read property 'x' of null" errors that can occur when you try to access properties or methods on variables that might be null or undefined.
   //Whenever use object property then use optional chaning because it is good way of handeling the data.
   setListOfRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setFilteredRestaurents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)//Intially my filteredRestaurents is empty and we get nothing on the page so to resolve this problem we updated the filteredRestaurents by data we get from api. 
   setIsLoading(false); 

 }
 /*Showing Spring Loader
 if(listOfRestaurents.length===0){
    return <h1>Loding....listOfRestaurents</h1>
 }*/

// Showing Shimmer UI
// if(listOfRestaurents.length===0){//this condition also known as conditional rendering(rendering based on condition.)
//     return <Shimmer/>
//  }


 //Return Using Teirnary operator
    return isLoading?(<Shimmer/>): (
        <div className="body">
            <div className="filter">
                
                {/* Search restaurents by name feature */}
                <div className="search">
                {/* 1)In React.js, the onChange event is a synthetic event that is used to capture changes made to form elements like input fields, textareas.
                2)Event Handling Function: You define a function (in this case, handleChange) that will be executed when the onChange event occurs. This function typically takes an event object as an argument.
                3)In the code example I provided, the event object is a JavaScript object that represents the event triggered by the user's interaction with the input field. The event object is automatically passed as an argument to the handleChange function when the onChange event occurs. It contains information about the event, including details about the user's interaction, such as the new value of the input field.
                4)event.target.value allows you to access the new value of the input field, which is what the user typed. */}


                {/* Here we bind the value to searchText state variable and searchText state variable is bind to input tag.so to change(write) in input box we have to change searchText and for that we use onChange event handeler. */}
                <input type="text" 
                className="search-box"  
                // value={searchText} 
                onChange={(e)=>{
                console.log(e);
                setSearchText(e.target.value);
                placeholder="Search For restaurat"
                }}
                /> 
                
                <button onClick={()=>{
                    //filter the restaurents card and update the ui .
                    //The toLowerCase() method converts a string to lowercase letters and here it makes filtering insensitive(i.e searching cofee and COFEE give same result)
                    const filteredRestaurent=listOfRestaurents.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase())) //The includes() method returns true if a string contains a specified value.
                    // setListOfRestaurents(filteredRestaurent);
                    setFilteredRestaurents(filteredRestaurent); 
                    

                }} className="search-btn">Search</button>
                </div>

                {/* Filter restaurents by rating */}
                <div className="filter-btn">
                    <button 
                    className="filter-btn-box"
        
                    onClick={()=>{
                    const filteredList= listOfRestaurents.filter((item)=>item.info.avgRating>=4 )//Use filter method.
                    setFilteredRestaurents(filteredList);//Proper way of updating state variable.
                    }
                    }
                    
                    >Top Rated Restaurant</button>
                </div>

            </div>
            
            
            <div className="res-container">
                {
                    // listOfRestaurents?.map((item)=>{
                    //     return (<RestaurantCard 
                    //     key={item.info.id} 
                    //     resData={item}/>
                    //     );
                    // })

                    //we kept copy of all the restaurents in listOfRestaurents state variable and during rendering i render filteredRestaurents.
                    // filteredRestaurents?.map((item)=>{
                    //     return (<RestaurantCard 
                    //     key={item.info.id} 
                    //     resData={item}/>
                    //     );
                    // })
                    
                    //Here we making card clickable using Link tag.we mapping over Link tag hence key should be in Link tag.
                    filteredRestaurents?.map((item)=>{
                        return (
                        <Link 
                        key={item.info.id} 
                        to={"/restaurants/"+item.info.id}>
                            <RestaurantCard resData={item}/>
                            </Link>
                        );
                    })
                
                }
                 
            </div>
        </div>
    )
}
export default Body;