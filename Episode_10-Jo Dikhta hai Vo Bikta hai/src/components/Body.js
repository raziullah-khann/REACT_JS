import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = (props) => {
  // Local State Variable =>Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // console.log(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_API);
    const jsonData = await response.json();
    // console.log(jsonData);
    //Optional Chaining
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const searchHandler = (event) => {
    setSearchText(event.target.value); //Search Text
  };

  //Conditional Rendoring
  console.log("Body Rendered"); 
  // console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>Currently You are Offline, Please check your connection</h1>;
 
  return !listOfRestaurants ? (
    <Shimmer />
  ) : ( 
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search px-10 flex flex-wrap">
          <label className="flex items-center" htmlFor="searchInput">Search</label>
          <input
            type="text"
            className="search-box my-1"
            id="searchInput"
            value={searchText}
            onChange={searchHandler}
            placeholder="Search any food"
          />
          <button
            className="search-btn flex items-center"
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
          className="filter-btn px-3"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex justify-center flex-wrap gap-5 p-30">
        {filteredRestaurant.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            <RestaurantCard resObj={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
