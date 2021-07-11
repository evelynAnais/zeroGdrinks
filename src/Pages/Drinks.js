import { useEffect, useState } from "react";
import DrinkList from "../components/drinks/DrinkList";
import { randomDrink } from "../utils/api";

export default function Drinks() {
  const [drink, setDrink] = useState({ drinks: [] });

  function spaceDrink() {
    randomDrink().then(setDrink)
  }
  /* function makeDrinkList() {
   *   const callList = [];
   *   for(let i = 1; i < 10; i++) {
   *     callList.push(randomDrink());
   *   }
   *   Promise.all(callList).then(res => setDrinks(res));
   * }
   *
   */
  useEffect(spaceDrink, [])
console.log('Drinks', drink)
  return (
    <>
      <DrinkList drink={drink.drinks[0]} />
    </>
  )
}