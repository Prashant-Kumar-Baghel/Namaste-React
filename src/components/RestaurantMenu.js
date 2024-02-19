// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =()=>{
    // const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();//Here Caller is RestaurantMenu.

    const [showIndex,setShowIndex]=useState(null)//At a time only one accordian is expanded and whatever the showIndex is then that accoedian will be expended.
    //Whenever the RestaurantMenu component is re-render then useRestaurantMenu custom hook call on every re-render but the useEffect present inside that useRestaurantMenu custom hook is call on only intial render(first rendering).

   const resInfo=useRestaurantMenu(resId);//creating custom hook and we have to provide resId to custom hook because we getting Menudata for particular resId.Now RestaurantMenu component don't need to worry about implementation of useRestaurantMenu of how we fetching the data.Now  RestaurantMenu component has single responsiblity to get the data and display onto page and useRestaurantMenu hook has responsibility to fetch the data.
   console.log("resInfo)",resInfo);
     if(resInfo===null)return <Shimmer/>;

   const{name, cuisines, costForTwoMessage}=(resInfo?.cards[0]?.card?.card?.info);

   const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

   console.log("items",itemCards);
//    we can't write @ directly because it is not valid javascript but if you have property which is not a variable in javascript then we can wrap it inside square bracket.
//As we only want to create different items categories which is called accordion feature so i use filter method to get array which represent ItemCategory.
   const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>
    item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   )
//    console.log(categories);

    return  (
        <div className="text-center">
            <h1 className="font-bold mt-5 text-2xl">{name}</h1>
            <p>{cuisines.join(", ")}</p>
            {/* <h3>{costForTwoMessage}</h3> */}
            {/* <h2>Menu</h2> */}
            {/* <ul>
              
                <h2>{itemCards[0]?.card?.info?.category}</h2>
                {
                itemCards.map((item)=>{
                    return(
                        <MenuCategory key={item?.card?.info?.id} menudata={item}/>
                    ) 
                })
                }
              
            </ul> */}
          

            {/* Categories accordions(Each accordion has header and body which is collapsiable and for each category we build accordian.we create new component to build accordian. ) */}
            {categories.map((category,index)=>
            <RestaurantCategory 
            data={category.card.card}
            key={category.card.card.title}
            showItems={(index===showIndex )?true:false}
            setShowIndex={ ()=>{
                if(index != showIndex){
                     setShowIndex(index);
                }else {//when we again click on that header of accordian then it should be close and for that we write else condition.
                     setShowIndex(null);
                }
            }}//this is the way to pass setShowIndex to create the feature that all accordian boady closed when one accordian is open. 
            />
            )}

        </div>
    )
}
export default RestaurantMenu;

