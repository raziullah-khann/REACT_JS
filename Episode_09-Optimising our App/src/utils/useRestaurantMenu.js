//This is custom hook here we fethch the data of restaurantMenu
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  //fetch the data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const jsonData = await response.json();
      setMenu(jsonData.data);
    } catch (error) {
      console.log("fetching issue, " + error.message);
    }
  };
  return menu;
};

export default useRestaurantMenu;
