import { CDN_URL } from "../utils/constants";

const MenuCategory = (props) => {
    
  const {items}=props;
  console.log("MenuItems",items);
  return (
    <div >
        {items.map((item)=>{
          return(
            // border-b-2 used for below Horizental line
          <div key={item?.card?.info?.id} className="text-left p-2 pb-5 m-2 border-b-2 border-gray-300">
           
              <div className="py-2">
                <span className="font-[600]">{item?.card?.info?.name}</span>
                <span> -₹ {(item?.card?.info?.price)?(item?.card?.info?.price/100):(item?.card?.info?.defaultPrice/100)}</span>
              </div>
            
            <div className="flex gap-[20px]" >
                <p className="text-sm w-[80%]">{item?.card?.info?.description}</p>
                <div className="w-[20%] relative">
                    <button className="text-green-400 text-center bg-white px-[20px] py-[10px] absolute text-[1rem] font-[600] rounded-md bottom-[-8px] left-[18%] shadow-md ">ADD +</button>
                    <img className="w-[100%] h-[15vh]" src={CDN_URL+item?.card?.info?.imageId} alt="" />
                </div>
            </div>
          </div>
          )
        })}
    </div>

  )
}

export default MenuCategory;
