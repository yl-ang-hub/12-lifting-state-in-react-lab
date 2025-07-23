import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => {
        return (
          <Ingredient
            ingredient={ingredient}
            burgerFn={() => props.addToBurger(idx)}
            fnType="add"
            key={idx}
          />
        );
      })}
    </ul>
  );
};

export default IngredientList;
