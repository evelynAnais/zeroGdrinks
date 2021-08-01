import { useEffect, useState } from 'react';
import { randomDrink, spaceItem } from '../utils/api';
import WordForm from '../components/home/WordForm';
import Intro from '../components/home/Intro';
import Story from '../components/home/Story';
import SpaceCard from '../components/cards/SpaceCard';
import DrinkCard from '../components/cards/DrinkCard';

export default function Home({ history }) {
  const [drink, setDrink] = useState({drinks: []});
  const [spaceObject, setSpaceObject] = useState({ bodies: [] });
  const [story, setStory] = useState(null);

  const createStory = (newStory) => setStory(newStory) ;

  function spaceDrink() {
    randomDrink().then(setDrink);
  }
  useEffect(spaceDrink, []);

  function object() {
    spaceItem().then((response) => {
      const obj = response.bodies[Math.floor(Math.random() * response.bodies.length)]
      setSpaceObject(obj);
    });
  }
  useEffect(object, []);

  useEffect(() => {
    return () => {
      if (story) {
        if (history.action === 'POP' ) {
          setStory(null);
          history.push('/');
        }
      }
    };
  }, [history, story]);

  const reset = () => {
    setStory(null);
    window.scrollTo(0,0);
  }

  return (
    <>{!story
      ?
      <>
        <Intro />
        <br/>
        <h3 className='row d-flex justify-content-around'>Fill, Read, Drink!</h3>
        <WordForm createStory={createStory} />
      </>
      :
      <>
        <Story drink={drink.drinks[0]} spaceObject={spaceObject} story={story} />
        <SpaceCard spaceObject={spaceObject} />
        <DrinkCard drink={drink.drinks[0]} />
        <div className='container'>
          <div className='row d-flex justify-content-around'>
            <button type='button' className="btn btn-dark" onClick={reset}>Start Again! Because, why not!</button>
          </div>
        </div>
        
      </>
      }
    </>
  );
}