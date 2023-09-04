import { ratingList } from "@/utils/data";
import React, { useState } from "react";

const RatingSelect = () => {
  const [selectedRating, setSelectedRating] = useState([]);
  const onSelectedrating = (isChecked, value) => {
    if (isChecked) {
      setSelectedRating([...selectedRating, value]);
    } else {
      setSelectedRating(selectedRating.filter((n) => n !== value));
    }
    console.log(selectedRating);
  };
  return (
    <div className="mt-5">
      <h2 className="font-bold">Select Rating</h2>
      <div>
        {ratingList.map((item, index) => (
          <div key={index} className="flex justify-between">
            <label>{item.icon}</label>
            <input
              type="checkbox"
              onChange={(e) => onSelectedrating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSelect;
