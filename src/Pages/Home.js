import WordForm from '../components/home/WordForm';
import Intro from '../components/home/Intro';
import Story from '../components/home/Story';
import SpaceCard from '../components/home/SpaceCard';
import DrinkCard from '../components/home/DrinkCard';

export default function Home() {
  return (
    <>true
      ?
      <Intro />
      <WordForm />
      :
      <Story />
      <SpaceCard />
      <DrinkCard />
    </>
  )
}