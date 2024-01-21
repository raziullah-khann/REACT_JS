import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";


const Body = (props) => {
  // Local State Variable =>Super Powerful variable
const [listOfRestaurants, setListOfRestaurants] = useState(restaurants); 

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item) => (
          <RestaurantCard resObj={item} key={item.info.id} />
        ))}
        {/* <RestaurantCard resObj={restaurants[0]} />
          <RestaurantCard resObj={restaurants[1]} />
          <RestaurantCard resObj={restaurants[2]} />
         */}
      </div>
    </div>
  );
};

export default Body;
