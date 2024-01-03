import { CDN_URL } from "../utils/constants";
const styleCard={//Inline style
    backgroundColor:"#f0f0f0"
}
const RestaurantCard=(props)=>{
    
    const {resData}=props;
 
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
        </div>
     )
}
export default RestaurantCard;