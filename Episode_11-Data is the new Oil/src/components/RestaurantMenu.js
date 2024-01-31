import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
// import classes from "../ComponentCSS/RestaurantMenu.module.css";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  //Object destructuring => useParams returns url parameter
  const { resId } = useParams();

  //here we use custom hook because i want to keep our component leaner only show menu details
  const menu = useRestaurantMenu(resId);

  if (menu === null) {
    return <Shimmer />;
  }

  // console.log(menu);

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    menu?.cards[0]?.card?.card?.info || {};

  //list of recomended items
  const itemCards =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  const categories =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log('categories',categories);

  // console.log("itemCards", menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div className="text-center">
      {/* <img
        className={classes.image}
        src={CDN_URL + "/" + cloudinaryImageId}
        alt="Image not found"
      /> */}
      <div>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines?.join(" ")} - {costForTwoMessage}
        </p>
        {/* {category accordian} */}
        {/* This is a control components */}
        {categories.map((cat, ind) => (
          <RestaurantCategory
            key={ind}
            data={cat?.card?.card}
            showItems={ind === showIndex ? true : false}
            setShowIndex={() => setShowIndex(ind)}
          />
        ))}
        <h2>Menu</h2>
      </div>
    </div>
  );
};

export default RestaurantMenu;
