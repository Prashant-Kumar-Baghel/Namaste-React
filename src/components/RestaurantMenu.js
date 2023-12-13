
// We create menupage and load that page on some Route.

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu =()=>{
    const [resInfo,setResInfo]=useState(null);//Intially resInfo is null meanwhile we making api call.
    // const oh=useParams();
    const {resId}=useParams();//To get different restaurant data(menudata) for different routes we take help of useParams(),we read the resId using useParams.we just extract resId from useParams().Basically useParams() return an object in which resId is present and we just extract that resId using destructuring and resId is an string.

    // console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async ()=>{
       
         //Below url is giving the restaurent data and that url is same for every restaurent ,just only resId is change in every url of restaurent.hence we pass resId as dynamic.

        //  1st Way(static)
        //  const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=63037&catalog_qa=undefined&submitAction=ENTER");

        //  2nd Way(dynamic)
        // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        //3rd way(dynamic)
        // const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

        //4th  way(dynamic)
        const data= await fetch(MENU_API+resId);//we are not in jsx hence we don't put curlie bracket over MENU_API+resId.
       
        const json= await data.json();//converting the data in json.
        console.log(json);
    
        setResInfo(json.data);

           
       
   }

     if(resInfo===null)return <Shimmer/>;//on first reloading we have resInfo as null then resInfo?.cards[0]?.card?.card?.info also become null hence we get error we destructuring from undefined hence we put condition if(resInfo===null)return <Shimmer/>; before destructuring.so after that we render useeffect hook and where we update value of resInfo using setResInfo(json.data).then when our state variable change our component render again hence now resInfo?.cards[0]?.card?.card?.info has proper data and we get value of name, cuisines, and costForTwoMessage on screen.

   const{name, cuisines, costForTwoMessage}=(resInfo?.cards[0]?.card?.card?.info);

   const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

   console.log(itemCards);

    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
              
                <h2>{itemCards[0]?.card?.info?.category}</h2>
                {
                itemCards.map((item)=>{
                    return(
                        <MenuCategory key={item?.card?.info?.id} menudata={item}/>
                    ) 
                })
                }
              
            </ul>
        </div>
    )
}
export default RestaurantMenu;

//we want to reuse this component that is we use same component with dynamic data load inside this.


//How above component work(when nullish coalescing operator is use):-
//  on first reloading we have resInfo as null then resInfo?.cards[0]?.card?.card?.info also become null hence we use nullish coalescing operator so resInfo?.cards[0]?.card?.card?.info become empty object and now includes name, cuisines, and costForTwoMessage, also assigned this empty object as its value.then after rendering of whole component we render useeffect hook and where we update value of resInfo using setResInfo(json.data).then when our state variable change our component render again hence now esInfo?.cards[0]?.card?.card?.info has proper data and we get value of name, cuisines, and costForTwoMessage on screen.


//code(when nullish coalescing operator is use) 

//we're using the nullish coalescing operator (||) to provide an empty object ({}) as a fallback when resInfo?.cards[0]?.card?.card?.info is undefined. This prevents the "undefined has no properties" error, and you can safely access the properties without worrying about null or undefined values.
// If resInfo is null or undefined, the whole expression evaluates to undefined. In this case, no further property access is attempted, and the variables name, cuisines, and costForTwoMessage will all be undefined.
//  if resInfo?.cards[0]?.card?.card?.info is null or undefined, the || operator returns an empty object {} as a fallback. This means that the variable being assigned on the left-hand side of the = sign, which includes name, cuisines, and costForTwoMessage, will be assigned this empty object as its value.

/*const{name, cuisines, costForTwoMessage}=(resInfo?.cards[0]?.card?.card?.info || {});
return resInfo===null?(<Shimmer/>): (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
)*/
