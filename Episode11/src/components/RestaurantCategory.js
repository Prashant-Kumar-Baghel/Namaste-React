
import { useState } from "react";
import MenuCategory from "./MenuCategory";

const RestaurantCategory=(props)=>{
    const {title,itemCards}=props.data;
    const { setShowIndex,showItems}=props;
    // console.log("showItems",(showItems));


    //create an state variable for hiding and showing the Accordian Body.
    // const [showItems,setShowItems]=useState(false);

    // We create this function to change the value of showItems .so we can hide and show the Accordian Body.
    const handleClick=()=>{
        // (showItems===true)?setShowItems(false):setShowItems(true);
        // setShowItem(!showItems);//this the way to write toogle feature.
        // showItems===false?setShowIndex():showItems=false;
        setShowIndex()
    }
    return(
        <div>
            <div className="bg-gray-100 shadow-lg my-5 p-4 w-1/2 mx-auto">
                {/* Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span className="text-lg">ᐯ</span>
                </div>
                {/* Accordian Body(When the showItems is true then only we show the Accordian Body and When the showItems is false then we hide the Accordian Body) */}

                {/* Below jsx is the UI layer Now we handle hiding and showing of the Accordian Body using the data layer and this data layer has state variable and that state variable decide wheather Accordian Body is show or doesnot show.*/}
               {showItems && <MenuCategory items={itemCards}/>}
            </div>
            
        </div>
    )
}
export default RestaurantCategory;


// Note:-1)margin: auto; is a CSS property that is commonly used to center an element horizontally within its containing element. When applied to a block-level element with a specified width, setting margin: auto; will distribute the remaining space equally on the left and right sides, effectively centering the element.It's commonly used with block-level elements like <div> or <p>.
// 2) m-1/2 use to give 50% width to an element in Tailwind CssSyntaxError.
