import { useEffect, useState } from 'react';
import { randomDrink, spaceItem } from '../utils/api';
import WordForm from '../components/home/WordForm';
import Intro from '../components/home/Intro';
import Story from '../components/home/Story';
import SpaceCard from '../components/cards/SpaceCard';
import DrinkCard from '../components/cards/DrinkCard';

export default function Home() {
  const [drink, setDrink] = useState({drinks: []});
  const [spaceObject, setSpaceObject] = useState({ bodies: [] })

  function spaceDrink() {
    randomDrink().then(setDrink)
  }
  useEffect(spaceDrink, [])

  function object() {
    spaceItem().then((response) => {
      const obj = response.bodies[Math.floor(Math.random() * response.bodies.length)]
      setSpaceObject(obj)
    })
  }
  useEffect(object, [])

  return (
    <>true
      ?
      <Intro />
      <WordForm />
      :
      <Story drink={drink.drinks[0]} spaceObject={spaceObject} />
      <SpaceCard spaceObject={spaceObject} />
      <DrinkCard drink={drink.drinks[0]} />
    </>
  )
}