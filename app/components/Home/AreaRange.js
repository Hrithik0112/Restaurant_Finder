import React, { useState } from "react";

const AreaRange = ({ onRadiusChange }) => {
  const [radius, setRadius] = useState(2500);
  return (
    <div className="mt-5">
      <h2 className="font-bold px-2">Select Radius (In Meter)</h2>
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none
      cursor-pointer"
        min={500}
        max={5000}
        step={500}
        onChange={(e) => {
          setRadius(e.target.value);
          onRadiusChange(e.target.value);
        }}
        defaultValue={radius}
      />
      <label className="text-gray-500">{radius} in Meters</label>
    </div>
  );
};

export default AreaRange;
