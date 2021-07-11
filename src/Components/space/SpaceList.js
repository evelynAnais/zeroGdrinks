import SpaceCard from "../cards/SpaceCard";

export default function SpaceList({ spaceObjectList, objectFunction }) {
  const spaceList = spaceObjectList.map((spaceObject, index) => (
    <SpaceCard key={index} spaceObject={spaceObject} />
  ))
  
  const newObjectClick = () => objectFunction()

  return (
    <>
      {spaceList}
      <button type='button' className="btn btn-success" onClick={newObjectClick}>
        more space stuff, because why not!!
      </button>
    </>
  )
}