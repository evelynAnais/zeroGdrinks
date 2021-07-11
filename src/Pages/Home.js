import { useEffect, useState } from 'react';
import { randomDrink } from '../utils/api';
import WordForm from '../components/home/WordForm';
import Intro from '../components/home/Intro';
import Story from '../components/home/Story';
import SpaceCard from '../components/home/SpaceCard';
import DrinkCard from '../components/home/DrinkCard';

export default function Home() {
  const [drink, setDrink] = useState({drinks: []});

  function spaceDrink() {
    randomDrink().then(setDrink)
  }
  useEffect(spaceDrink, [])
  return (
    <>true
      ?
      <Intro />
      <WordForm />
      :
      <Story drink={drink.drinks} />
      <SpaceCard />
      <DrinkCard drink={drink.drinks} />
    </>
  )
}