import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Space from './Pages/Space';
import Drinks from './Pages/Drinks';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/space' component={Space} />
        <Route path='/drinks' component={Drinks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
