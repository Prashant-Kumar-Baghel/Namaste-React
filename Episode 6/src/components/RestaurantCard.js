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
        <div className="res-card" style={styleCard} >
            <img 
            className="res-logo"
            src={CDN_URL+cloudinaryImageId}
            alt="" />


             {/* Optimization */}
            <h3>{name}</h3> 
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
             <h4>{deliveryTime} minutes</h4>
        </div>
     )
}
export default RestaurantCard;
