import DrinkCard from '../cards/DrinkCard';

export default function DrinkList({ drinkList, makeDrinkListFunction }) {
  const drinkItems = drinkList.map((drink, index) => {
    return (
      <DrinkCard key={index} drink={drink.drinks[0]} />
    );
  });

  const newDrinkClick = () => {
    makeDrinkListFunction();
    window.scrollTo(0,0);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {drinkItems.slice(0,5)}
        </div>
        <div className='col'>
          {drinkItems.slice(5)}
        </div>
      </div>
      <div className='row d-flex justify-content-around'>
        <button type='button' className='btn btn-dark' onClick={newDrinkClick}>
          More random alcohol stuff, because why not!!
        </button>
      </div>
    </div>
  );
}