import {  useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
const styleCard={//Inline style
    backgroundColor:"#f0f0f0"
}
const RestaurantCard=(props)=>{
    
    const {resData}=props;
    //Way to access context.
    const {loggedInUser}=useContext(userContext);
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId
    }=resData?.info;
    const {deliveryTime}=resData?.info.sla;
     return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
            <img 
            className="res-logo h-[200px] w-[100%] rounded-lg"
            src={CDN_URL+cloudinaryImageId}
            alt="" />


             {/* Optimization */}
            <h3 className="font-bold py-4 text-lg">{name}</h3> 
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
             <h4>{deliveryTime} minutes</h4>
             <h4>{loggedInUser}</h4>
        </div>
     )
}

//Higher Order Component(input:- RestaurantCard and output:- RestaurantCardVegetarian  )
// Here withVegetarianLabel is H.O.C and it takes RestaurantCard as input and return a new component which has Vegetarian label on it.
export const withVegetarianLabel=(RestaurantCard)=>{
    // return a new component which has Vegetarian label on it but that component is a function which return jsx hence we return jsx.
    // we have passed props to RestaurantCardVegetarian component hence we recieve these props in below component.
    return (props)=>{
        const {resData}=props;
        return(
            <div>
                <label className="absolute bg-green-600 text-white ml-[18px] p-[5px] rounded-sm">Vegetarian</label>
                {/* Now we need to pass props data to below RestaurantCard because H.O.C are Pure Function . H.O.C will not modifiy the code of RestaurantCard and use it in exactly how we use RestaurantCard. we are not modifiying RestaurantCard feature. i am just adding something top of it. hence H.O.C are used to enhance the component maybe its UI , maybe passing extra props .
                What is Pure Function?
                These are functions which doesnot change in the component which they take as input. */}
                {/* We can also write like in this way also that We can Used Spread Operator and it just passed all the props that we recieved to RestaurantCard. :-  <RestaurantCard {...props}/> */}
                <RestaurantCard resData={resData}/>
                
            </div>
        )
    }
}

export default RestaurantCard;