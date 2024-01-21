import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_LINK } from "../utils/constants";
import classes from "../ComponentCSS/RestaurantMenu.module.css";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  //Object destructuring => useParams returns url parameter
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_LINK + resId);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const jsonData = await response.json();
      setMenu(jsonData?.data);
      //   console.log(jsonData.data);
    } catch (error) {
      console.log("fetching issue, " + error.message);
    }
  };
  //   console.log(menu);

  if (menu === null) {
    return <Shimmer />;
  }

  console.log(menu);

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    menu?.cards[0]?.card?.card?.info;

  //list of recomended items
  const itemCards =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  console.log("itemCards", itemCards);

  return (
    <div className={classes.menu}>
      <img
        className={classes.image}
        src={CDN_URL + "/" + cloudinaryImageId}
        alt="Image not found"
      />
      <div className={classes.info}>
        <h1>{name}</h1>
        <p>
          {cuisines.join(" ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards &&
            itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs {item.card.info.price / 100}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
