import { useState } from "react"
import DrinkCard from "../cards/DrinkCard"

export default function DrinkList({ drink }) {
  // instead of this drinks comes as a list already
  const [drinks, setDrinks] = useState([])
  // const [showItems, setShowItems] = useState(1)
  // while showItems < drinks.length 
  // count button handler setsShowItems showItems + 1
  // at drinks.length callback makeDrinkList()
console.log('drinklist',drinks)
  // this maps drinks the prop
  const drinkList = drinks.map((drink, index) => (
    <DrinkCard key={index} drink={drink} />
  ))

  return (
    <>
      {drinkList}
    </>
  )
}