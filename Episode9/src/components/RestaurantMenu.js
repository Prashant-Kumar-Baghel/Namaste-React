// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu =()=>{
    // const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();//Here Caller is RestaurantMenu.

   const resInfo=useRestaurantMenu(resId);//creating custom hook and we have to provide resId to custom hook because we getting Menudata for particular resId.Now RestaurantMenu component don't need to worry about implementation of useRestaurantMenu of how we fetching the data.Now  RestaurantMenu component has single responsiblity to get the data and display onto page and useRestaurantMenu hook has responsibility to fetch the data.

     if(resInfo===null)return <Shimmer/>;

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

