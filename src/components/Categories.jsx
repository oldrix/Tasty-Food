import Rolls from "../assets/img/rolls.png";
import Wok from "../assets/img/wok.png";

import Drink from "../assets/img/drink.png";
import Sous from "../assets/img/sous.png";
import Burger from "../assets/img/burger.png";
import Pizza from "../assets/img/Pizza.png";
import React from "react";
function Categories({ value, onClickCategory }) {
  const categoryList = [
    { image: Pizza, name: "Пицца" },
    { image: Rolls, name: "Роллы" },
    { image: Wok, name: "Wok" },
    { image: Burger, name: "Бургеры" },
    { image: Drink, name: "Напитки" },
    { image: Sous, name: "Соусы" },
  ];
  return (
    <div className="categories">
      <ul>
        {categoryList.map((obj, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            <img src={obj.image} width={24} height={24} alt="foodIcon" />
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
