import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Space from './pages/Space';
import Drinks from './pages/Drinks';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/space' component={Space} />
        <Route path='/drinks' component={Drinks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
