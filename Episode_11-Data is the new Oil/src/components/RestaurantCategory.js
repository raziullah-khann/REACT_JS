import React, {useState} from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  //   console.log(data);
  
  const clickHandler = () => {
    setShowIndex();
  }

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/* Accordian Header */}
      <div>
        <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
          <span className="font-bold">{`${data.title}(${data.itemCards.length})`}</span>
          <span>{"⬇️"}</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
