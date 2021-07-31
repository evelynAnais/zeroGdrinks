import { randomWord, timeOfDayRandom, weatherRandom } from "../../utils/randomWords"

export default function Story({ drink, spaceObject, story }) {
  return (
    <div>
      <h3>Drinking with { story?.name } in Space!!!</h3>
      <p>One { randomWord(weatherRandom) } {  } morning/timeofday in a galaxy called the milky way 
        bob/username was feeling happy/emotion. bob/username suddenly woke up 
        rattled/excitingword from sleep and remembered they know live on 
        moon/spaceobject.  {spaceObject?.name} reminising about the good
        old days back on earth, username, decided to call friendname. They were going to
        have a party even though it had been time since any had been on earth. such a tiny planet
        compared to the huge planet they now lived on. They called up all their friends and number
        showed up. It was amazing. They drank {drink?.strDrink} and danced to type of music.
        they were having so much that they attracted some unexpected guests! Little blue aliens
        with big body part ended up being the life of the party. Username gave alienName a drink 
        and a object. They were having so much fun everyone was cheering action word for them
        keep the party going. They partied for time. Everyone decided they needed to make it a
        tradition celebrating how great life was on {spaceObject?.name} with teh new alien friends
        they met! So every time time it is time of day every time they celabreate with drink!
      </p>
    </div>
  )
}