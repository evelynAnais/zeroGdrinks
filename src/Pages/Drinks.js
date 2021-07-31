import { useEffect, useState } from "react";
import DrinkList from "../components/drinks/DrinkList";
import { randomDrink } from "../utils/api";

export default function Drinks() {
  const [drinkList, setDrinkList] = useState([]);

  function makeDrinkList() {
    const callList = [];
    for(let i = 0; i < 10; i++) {
      callList.push(randomDrink());
    }
    Promise.all(callList).then(res => setDrinkList(res));
  }
  
  useEffect(makeDrinkList, [])
console.log(drinkList[0]?.drinks[0])
  return (
    <>
      <h3 className='row d-flex justify-content-around'>Random Drinks!</h3>
      <DrinkList drinkList={drinkList} makeDrinkListFunction={makeDrinkList} />
    </>
  )
}