import React from "react";
import { CDN_URL } from "../utils/constants";
import starIcon from "../Images/star.png";
import vegIcon from "../Images/veg.jpg";

function ItemList({ items }) {
  // console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-3 m-3 border-grey-200 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="">
            <div className="flex flex-col py-2">
              <div className="flex items-center">
                <span>
                  <img
                    className="bg-transparent w-5"
                    src={vegIcon}
                    alt="Veg icon not found"
                  />
                </span>
                {item.card.info.ribbon.text ? (
                  <span className="">
                    <img className="w-5" src={starIcon} alt="star not found" />
                  </span>
                ) : (
                  ""
                )}
                <span className="text-orange-600">
                  {item.card.info.ribbon.text}
                </span>
              </div>
              <span>{item.card.info.name}</span>
              <span>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          {/* Image and button */}
          <div className="p-2 ">
            {item?.card?.info?.imageId && (
              <img
                className="w-28 h-24 rounded-md"
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
              />
            )}
            <div className="relative bottom-7">
              <button className="bg-white shadow-lg mx-5 p-2 w-20 rounded-lg text-green-600">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
