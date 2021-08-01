import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import WordForm from '../components/home/WordForm';
import Intro from '../components/home/Intro';
import Story from '../components/home/Story';
import SpaceCard from '../components/cards/SpaceCard';
import DrinkCard from '../components/cards/DrinkCard';

export default function Home({ story, drink, spaceObject, reset, createStory }) {
  const history = useHistory();

  useEffect(() => {
    return () => {
      if (story) {
        if (history.action === 'POP' ) {
          createStory(null);
          history.push('/');
          
        }
      }
    };
  }, [history, story, createStory]);
  
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