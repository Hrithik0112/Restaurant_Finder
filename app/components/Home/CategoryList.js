"use client";
import { CategoryListData } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
const CategoryList = () => {
  const [categoryList, setCategoryList] = useState(CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div>
      <h2 className="font-bold">Select food type</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {categoryList.map((item, index) => (
          <div
            className={`flex flex-col justify-center items-center bg-gray-100 border-blue-400
        p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer 
        ${selectedCategory == index ? "grayscale-0 border-[1px]" : null}`}
            onClick={() => setSelectedCategory(index)}
            key={index}
          >
            <Image src={item.icon} alt={item.name} height={50} width={50} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
