import { useState } from "react"; //we import as a named import.
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
  //State Variable:-State Variable is Super Powerfull variable and we create super Powerfull variable using  useState hook. it is called state variable because it maintain the state of component. 

  //Hooks
 //At the end of day, hook is normal javaScript function which is given by react.it is pre-built.that function is a utility function given by react.these hooks(js function) written inside react in node_modulus. 

 //Always write hook inside the component jsut above the return statement.
 
 //State Variable
 
//  (2nd)const [listRest,setlistRest]= useState([
//       {
//           "info": {
//             "id": "264693",
//             "name": "Domino's Pizza",
//             "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//               "Pizzas",
//               "Italian",
//               "Pastas",
//               "Desserts"
//             ],
//             "avgRating": 3.8,
//             "sla": {
//               "deliveryTime": 25,
//             }
//         }
//       },
//       {
//           "info": {
//             "id": "26469",
//             "name": "Lapino",
//             "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//               "Pizzas",
//               "Italian",
//               "Pastas",
//               "Desserts"
//             ],
//             "avgRating": 4.4,
//             "sla": {
//               "deliveryTime": 25,
//             }
//         }
//       },
//       {
//           "info": {
//             "id": "2646",
//             "name": "Burger",
//             "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//               "Pizzas",
//               "Italian",
//               "Pastas",
//               "Desserts"
//             ],
//             "avgRating": 4.4,
//             "sla": {
//               "deliveryTime": 25,
//             }
//         }
//       },
//       {
//         "info": {
//           "id": "26460",
//           "name": "Mess",
//           "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 2.2,
//           "sla": {
//             "deliveryTime": 25,
//           }
//       }
//       }
//     ])

 const [listRest,setlistRest]= useState(resList)


  //Normal JavaScript variable(1st,Here Ui not changes)
// let listRest=[
//     {
//         "info": {
//           "id": "264693",
//           "name": "Domino's Pizza",
//           "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 3.8,
//           "sla": {
//             "deliveryTime": 25,
//           }
//       }
//     },
//     {
//         "info": {
//           "id": "26469",
//           "name": "Lapino",
//           "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 4.4,
//           "sla": {
//             "deliveryTime": 25,
//           }
//       }
//     },
//     {
//         "info": {
//           "id": "2646",
//           "name": "Burger",
//           "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//             "Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"
//           ],
//           "avgRating": 4.4,
//           "sla": {
//             "deliveryTime": 25,
//           }
//       }
//     }
// ]

    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                // In onClick,arrow function is javaScript hence we wrap it inside curlie bracket. 
                onClick={()=>{
                  //Filter Logic
                  // Any of Both statements is not  returned, and it's generally used for updating the state, rather than for its return value.hence we not use return keyword.
                   const filteredList= listRest.filter((item)=>item.info.avgRating>=4 )//Use filter method.
                   setlistRest(filteredList);//Proper way of updating state variable.
                }
                }
                
                >Top Rated Restaurant</button>
            </div>
            
            <div className="res-container">
                {
                listRest.map((item)=>{
                        return (<RestaurantCard 
                        key={item.info.id} 
                        resData={item}/>
                        );
                })
                
                }
                 
            </div>
        </div>
    )
}
export default Body;