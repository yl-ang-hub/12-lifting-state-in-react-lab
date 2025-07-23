import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.burger.length !== 0 ? (
        props.burger.map((ingredient, idx) => {
          return (
            <Ingredient
              ingredient={ingredient}
              burgerFn={() => props.removeFromBurger(idx)}
              fnType="remove"
              key={idx}
            />
          );
        })
      ) : (
        <h3>Add ingredients now!</h3>
      )}
    </ul>
  );
};

export default BurgerStack;
