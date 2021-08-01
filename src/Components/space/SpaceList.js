import SpaceCard from '../cards/SpaceCard';

export default function SpaceList({ spaceObjectList, objectFunction }) {
  const spaceList = spaceObjectList.map((spaceObject, index) => (
    <SpaceCard key={index} spaceObject={spaceObject} />
  ));
  
  const newObjectClick = () => {
    objectFunction();
    window.scrollTo(0,0);
  }  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          {spaceList.slice(0,5)}
        </div>
        <div className='col'>
          {spaceList.slice(5)}
        </div>
      </div>
      <div className='row d-flex justify-content-around'>
        <button type='button' className='btn btn-dark' onClick={newObjectClick}>
          More random space stuff, because why not!!
        </button>
      </div>
    </div>
  );
}