import { useContext, useEffect, useState } from "react"; //we import as a named import.
import RestaurantCard, { withVegetarianLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

// import resList from "../utils/mockData";//Now we are using live api data hence no need of resList hence we also delete mockData.js folder(/utils/mockData).

const Body=()=>{
    

    
 const [listOfRestaurents,setListOfRestaurents]= useState([]);//we intialize listOfRestaurents with empty array.because in starting we want blank page.As we know on any state variable update then whole component is re-render so every state variable present inside component is re-created but this is not happened and the only the state variable which was updated is re-created with the updated value.
 const [filteredRestaurents,setFilteredRestaurents]=useState([]);//we create another state variable filteredRestaurents for only the filtered restaurents.
 
 const [isLoading, setIsLoading] = useState(true);
 //Calling withVegetarianLabel() H.O.C and H.O.C return RestaurantCardVegetarian function which has vegetarian label.
 const RestaurantCardVegetarian =withVegetarianLabel(RestaurantCard);

 //UserContext 
 const {loggedInUser,setUsername}=useContext(userContext);

 const [searchText,setSearchText]=useState("")
 useEffect(()=>{
    fetchData();
 },[])

 const fetchData= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7020362&lng=76.7034584&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

   const json= await data.json();//In json we all api data
   console.log(json);
   

   setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setFilteredRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)//Intially my filteredRestaurents is empty and we get nothing on the page so to resolve this problem we updated the filteredRestaurents by data we get from api. 
   setIsLoading(false); 

 }
 

const onlineStatus=useOnlineStatus();

if(onlineStatus===false){//when we are offline then we get this message and we also display games for good user experience instead of that message.
    return(
        <h1>Looks like you are offline So Please Check Your Internet Connection.</h1>
    )
}

 //Return Using Teirnary operator
    return isLoading?(<Shimmer/>): (
        <div className="body">
            <div className="filter flex items-center gap-2">
                
                {/* Search restaurents by name feature */}
                <div className="search">
                <input type="text" 
                className="search-box px-4 py-2 m-4 border-solid border-black border-2"  
                // value={searchText} 
                onChange={(e)=>{
                console.log(e);
                setSearchText(e.target.value);
                placeholder="Search For restaurat"
                }}
                /> 
                
                <button onClick={()=>{
                    const filteredRestaurent=listOfRestaurents.filter((item)=>item.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurents(filteredRestaurent); 
                    

                }} className="search-btn px-2 py-2 bg-green-300 rounded-lg">Search</button>
                </div>

                {/* Filter restaurents by rating */}
                <div className="filter-btn ">
                    <button 
                    className="filter-btn-box bg-red-300 p-2 rounded-lg"
        
                    onClick={()=>{
                    const filteredList= listOfRestaurents.filter((item)=>item.info.avgRating>=4 )//Use filter method.
                    setFilteredRestaurents(filteredList);//Proper way of updating state variable.
                    }
                    }
                    
                    >Top Rated Restaurant</button>
                </div>

                 {/* We create feature that whatever i write inside input box that should be update inside my context.so i need to update loggedInUser and for that i need to update username state variable inside App.js and for that i use setUsername and when we update the loggedInUser inside context then it also update About.js which is class based component  , About us page is coming by lazy loading that is when i load home page then we even don't have code for About us page but when i click on About us button then i get code for About Us page but still what change i have done inside home page reflect on About Us page. This is the power of context */}
                <div>
                    <label htmlFor="name">UserName :- </label>
                    <input 
                    type="text" 
                    className="p-2 border-black border-solid border-[2px]" 
                    value={loggedInUser} 
                    id="name"
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </div>

            </div>
            
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurents?.map((item)=>{
                        return (
                            
                          
                        <Link 
                        key={item.info.id} 
                        to={"/restaurants/"+item.info.id}>
                            {/* if the restaurant is vegetarian then add open label to it. for that we write conditianal statement here and if food is veg. then render <RestaurantCardVegetarian resData={item}/> component otherwise render <RestaurantCard resData={item}/>*/}
                            {/* RestaurantCardVegetarian component also need resData for read. hence we passed props.*/}
                            {(item.info.veg)?<RestaurantCardVegetarian resData={item}/>:

                            <RestaurantCard resData={item}/>}
                        </Link>
                        );
                    })
                
                }
                 
            </div>
        </div>
    )
}
export default Body;