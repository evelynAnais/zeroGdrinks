import { useEffect, useState } from 'react';
import { getPeople, spaceItem } from '../utils/api';
import CarouselInSpace from '../components/space/CarouselInSpace';
import SpaceList from '../components/space/SpaceList';


export default function Space() {
  const [spacePeople, setSpacePeople] = useState({ people: [] });
  const [spaceObject, setSpaceObject] = useState({ bodies: [] })

  function people() {
    getPeople().then(setSpacePeople)
  }
  useEffect(people, [])

  function object() {
    spaceItem().then((response) => {
      const obj = response.bodies[Math.floor(Math.random() * response.bodies.length)]
      setSpaceObject(obj)
    })
  }
  useEffect(object, [])
  
  return (
    <>
      <CarouselInSpace spacePeople={spacePeople} />
      <SpaceList spaceObject={spaceObject} />
    </>
  )
}