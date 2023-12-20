
const MenuCategory = (props) => {
    const {menudata}=props;
    const {description,name,price}=menudata?.card?.info;
  return (
    <div className="menu">
        <h3>{name}</h3>
        <h5>{price/100}</h5>
        <p>{description}</p>
    </div>

  )
}

export default MenuCategory;
