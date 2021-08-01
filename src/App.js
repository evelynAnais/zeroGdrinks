import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { randomDrink, spaceItem } from './utils/api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Space from './pages/Space';
import Drinks from './pages/Drinks';

function App() {
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

  const reset = () => {
    setStory(null);
    window.scrollTo(0,0);
  }

  return (
    <>
      <div>
        <Header reset={reset} />
      </div>
      <Switch>
        <Route path='/zeroGdrinks' exact>
          <Home 
            story={story} 
            drink={drink} 
            spaceObject={spaceObject} 
            reset={reset}
            createStory={createStory} 
            />
        </Route>
        <Route path='/space' component={Space} />
        <Route path='/drinks' component={Drinks} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
