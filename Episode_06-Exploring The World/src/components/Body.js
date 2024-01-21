import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = (props) => {
  // Local State Variable =>Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // console.log(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  console.log(searchText);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    //Optional Chaining
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
  };

  const searchHandler = (event) => {
    setSearchText(event.target.value); //Search Text
  };

  //Conditional Rendoring

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <label htmlFor="searchInput">Search</label>
          <input
            type="text"
            className="search-box"
            id="searchInput"
            value={searchText}
            onChange={searchHandler}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((item) => (
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
