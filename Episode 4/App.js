import React from "react";
import ReactDOM from "react-dom/client";

//  Header(Navigation bar)
const Header=()=>{
    return (
        <div className="header">

            <div className="logo-container">
                <img 
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThk6B4F2Q-aQEosit-VHmYfxhiDDAlBNo-JuA8nQN&s"/>
            </div>

            <div className="nav-items">
                
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                
            </div>

        </div>
    )
}

//body
const styleCard={//Inline style
    backgroundColor:"#f0f0f0"
}
/*What is config-driven ui?
Configuration-driven UI, also known as config-driven UI or configuration-based UI - When you build a real world application so you want your  website should work in many country or many places so we control our frontend which is known as using Config-Driven UI.
or
In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.
The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behavior of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic*/
// Card
const RestaurabtCard=(props)=>{//Instead of props we can do destructuring like we can write {name,cuisins} instead of props in above round bracket ,both are same .
    
    // const {name,cuisines}=props;
    const {resData}=props;

    //Optimization
    // 1)resData?.data is an example of using the optional chaining operator in JavaScript. This operator allows you to access properties of an object in a way that gracefully handles cases where the object or its properties might be null or undefined.
    // a)If resData is null or undefined, the expression resData?.info will return undefined without causing an error.
    // b)If resData is not null or undefined, the expression will effectively access the data property of resData.
    // 2)Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects into distinct variables. It provides a concise way to unpack values from data structures like arrays and objects, making your code more readable and less repetitive. 
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
            // + operator use in javaScript hence we wrap this inside  curlie bracket.
            // In src, we use cdn and cloudinaryImageId , here cloudinaryImageId is different for every image and cdn is same for every image.
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+cloudinaryImageId}
            alt="" />

             
            {/* <h3>{props.name}</h3> // Here props is an object hence we have to write props.name in curlie bracket.
             <h4>{cuisines}</h4>
              */}

             {/* When resData is object */}
             {/* <h3>{resData.info.name}</h3> 
             <h4>{resData.info.cuisines.join(", ")}</h4>
             <h4>{resData.info.avgRating}</h4>
             <h4>{resData.info.costForTwo}</h4>
             <h4>{resData.info.sla.deliveryTime} minutes</h4> */}

             {/* Optimization */}
            <h3>{name}</h3> 
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating}</h4>
             <h4>{costForTwo}</h4>
             <h4>{deliveryTime} minutes</h4>
        </div>
     )
}

const resList=[
      {
        "info": {
          "id": "264693",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "rhwbzwy7juqrzxpn6ibg",
          "locality": "Himalaya Marg",
          "areaName": "Sector 22",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.4,
          "feeDetails": {
            "restaurantId": "264693",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "2456",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 25,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-17 01:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-himalaya-marg-sector-22-chandigarh-264693",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "41298",
          "name": "KFC",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "locality": "Piccadily Square Mall, Chandigarh",
          "areaName": "Sector 34",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "41298",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "547",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 16,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "16 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-16 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-piccadily-square-mall-sector-34-chandigarh-41298",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "254108",
          "name": "McDonald's",
          "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
          "locality": "Aroma Complex",
          "areaName": "Sector 22",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "American",
            "Fast Food"
          ],
          "avgRating": 3.9,
          "feeDetails": {
            "restaurantId": "254108",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "630",
          "avgRatingString": "3.9",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "27 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-17 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-aroma-complex-sector-22-chandigarh-254108",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "41350",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "chandigarh",
          "areaName": "Sector 35",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "41350",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "166",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-17 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-sector-35-chandigarh-41350",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "78326",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
          "locality": "Aroma Complex",
          "areaName": "Sector 22",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Bakery",
            "Beverages",
            "Chaat",
            "Desserts",
            "Home Food",
            "Italian",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "Sweets"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "78326",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "281782",
          "avgRatingString": "4.2",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "19 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-17 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-aroma-complex-sector-22-chandigarh-78326",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "675103",
          "name": "Theobroma",
          "cloudinaryImageId": "12019c47b4917fc54ce37d0e678dea5d",
          "locality": "SCO 430",
          "areaName": "Sector 35 C",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Desserts"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "675103",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3200
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3200
          },
          "parentId": "1040",
          "avgRatingString": "4.2",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-16 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-sco-430-sector-35-c-chandigarh-675103",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "750589",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "f44bc9708c514cd2dd6ae0d8b4677214",
          "locality": "PICCADAILY MULTIPLEX",
          "areaName": "SECTOR 34",
          "costForTwo": "₹800 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "750589",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "4961",
          "avgRatingString": "4.0",
          "totalRatingsString": "2",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-17 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-piccadaily-multiplex-sector-34-chandigarh-750589",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "42803",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "Aroma Complex",
          "areaName": "Sector 22",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Fast Food",
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.7,
          "feeDetails": {
            "restaurantId": "42803",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2500
          },
          "parentId": "2",
          "avgRatingString": "3.7",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-16 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-aroma-complex-sector-22-chandigarh-42803",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "435686",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "South Chd",
          "areaName": "Sector 26",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 3.6,
          "feeDetails": {
            "restaurantId": "435686",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3000
          },
          "parentId": "721",
          "avgRatingString": "3.6",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "31 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-08-17 04:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-3d8fe396-ad1f-49c9-9b11-4040edda949d"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-south-chd-sector-26-chandigarh-435686",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
    
]  
const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/* Whenever we need anything which can be reuse we create Component for that . */}
                {/* name,cuisins,resData are props. */}

                {/* When resList is an object */}
                {/* <RestaurabtCard 
                 resData={resList}/> */}

                {/* <RestaurabtCard name="KFC"
                cuisins="Burger, Fast Food is  Indian"/> */}

                {/* Optimization(map method) */}  

                {/* Note:- 1)whenever we looping over list we have to provide key. we use key keyword to provide key.key should be unique.we give unique id to key keyword.
                2 Keys are used in React to identify which items in the list are changed, updated, or deleted.
                3)Keys are used to give an identity to the elements in the lists. */}
                {
                resList.map((item)=>{
                        return <RestaurabtCard key={item.info.id} resData={item}/>
                })
                
                }
                 
            </div>
        </div>
    )
}
const AppLayout=()=>{
     return (
        <div className="app "> 
            <Header/>
            <Body/>
        </div>
     )
}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);//Way to render an React Functional Component.
