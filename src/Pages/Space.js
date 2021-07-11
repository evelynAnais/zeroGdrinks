import { useEffect, useState } from 'react';
import { getPeople } from '../utils/api';
import CarouselInSpace from '../components/space/CarouselInSpace';

export default function Space() {
  const [spacePeople, setSpacePeople] = useState({people: [] });

  function people() {
    getPeople().then(setSpacePeople)
  }
  useEffect(people, [])

  return (
    <>
      <CarouselInSpace spacePeople={spacePeople} />
    </>
  )
}