import { CDN_URL } from "../utils/constants";
import classes from "../ComponentCSS/RestaurantCard.module.css";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resObj } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla: { deliveryTime },
  } = resObj?.info;

  return (
    <div className="res-card shadow-2xl">
      <img
        className="burger_image rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Image not Found"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <div className="rating">
        <h4>Rating:{avgRating} stars</h4>
        <h4>{deliveryTime} MIN</h4>
      </div>
    </div>
  );
};

//Higher Order Component

//input - RestaurantCard ==>> RestaurantCardVeg

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="wrapper">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg z-999">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};


export default RestaurantCard;
