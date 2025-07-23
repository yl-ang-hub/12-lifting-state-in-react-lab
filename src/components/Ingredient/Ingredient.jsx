import React from "react";

const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: `${props.ingredient.color}` }}>
      {props.ingredient.name}
      <button onClick={props.burgerFn}>
        {props.fnType === "remove" ? "X" : "+"}
      </button>
    </li>
  );
};

export default Ingredient;
