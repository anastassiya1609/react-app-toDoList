// import { useState } from "react";
import CategoriesItem from "./CategoriesItem";

export default function Categories({categories, activeCategory, setActiveCategory}) {

  return (
    <ul className="todo-categories">

        {categories.map((item, index) => (
            <CategoriesItem
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            name={item}
            index={index}
            key={item}
          />
        ))}
    </ul>
  );
}