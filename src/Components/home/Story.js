export default function Story({ drink, spaceObject, story }) {


  return (
    <div>
      <h3>Drinking with Bob/UserName in Space!!!</h3>
      <p>One sunny/adjective morning/timeofday in a galaxy called the milky way 
        bob/username was feeling happy/emotion. bob/username suddenly woke up 
        rattled/excitingword from sleep and remembered they know live on 
        moon/spaceobject. {drink?.strDrink} {spaceObject?.name}
      </p>
    </div>
  )
}