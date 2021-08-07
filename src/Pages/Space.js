import { useEffect, useState } from 'react';
import { getPeople, spaceItem } from '../utils/api';
import CarouselInSpace from '../components/space/CarouselInSpace';
import SpaceList from '../components/space/SpaceList';
import Loading from '../components/Loading';
import Stars from '../assets/Stars.svg'

export default function Space() {
  const [spacePeople, setSpacePeople] = useState({ people: [] });
  const [spaceObjectList, setSpaceObjectList] = useState([]);
  const [loading, setLoading] = useState(false);

  function people() {
    getPeople().then(setSpacePeople);
  }
  useEffect(people, []);

  function object() {
    setLoading(true);
    spaceItem().then((response) => {
      const randomObjects = [];
      for (let i = 0; i < 10; i++) {
        randomObjects.push(response.bodies[Math.floor(Math.random() * response.bodies.length)]);
      }
      setSpaceObjectList(randomObjects);
      setLoading(false);
    });
  }
  useEffect(object, []);

  return (
    <>
      <CarouselInSpace spacePeople={spacePeople} />
      <h3 className='row d-flex justify-content-around'>Random Space Objects</h3>
      {loading && <Loading svgSrc={Stars} />}
      <SpaceList spaceObjectList={spaceObjectList} objectFunction={object} />
    </>
  );
}