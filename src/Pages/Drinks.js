import { useEffect, useState } from 'react';
import DrinkList from '../components/drinks/DrinkList';
import Loading from '../components/Loading';
import { randomDrink } from '../utils/api';
import Martini from '../assets/Martini.svg'


export default function Drinks() {
  const [drinkList, setDrinkList] = useState([]);
  const [loading, setLoading] = useState(false);

  function makeDrinkList() {
    setLoading(true);
    const callList = [];
    for(let i = 0; i < 10; i++) {
      callList.push(randomDrink());
    }
    Promise.all(callList).then(res => {
      setDrinkList(res);
      setLoading(false);
    });
  }
  
  useEffect(makeDrinkList, []);

  return (
    <>
      <h3 className='row d-flex justify-content-around'>Random Drinks!</h3>
      {loading && <Loading svgSrc={Martini} />}
      <DrinkList drinkList={drinkList} makeDrinkListFunction={makeDrinkList} />
    </>
  );
}