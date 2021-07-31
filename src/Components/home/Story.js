import { randomWord, weatherRandom, timeOfDayRandom, timeRandom, sizeRandom, beautyRandom } from "../../utils/randomWords"

export default function Story({ drink, spaceObject, story }) {
  return (
    <div>
      <h3>Drinking with { story?.name } in Space!!!</h3>
      <p>On a { randomWord(weatherRandom) } { randomWord(timeOfDayRandom) } in a galaxy called 
        the milky way { story?.name } woke up feeling { story?.feeling } and remembered humanity now lives 
        on { spaceObject?.name }. Reminiscing about the { story?.descriptive } days back on earth, { story?.name }, 
        decided to call { story.friend }. They were going to have a party even though it had 
        been { randomWord(timeRandom) } since anyone had been on earth. Such a { randomWord(sizeRandom) } planet
        compared to the { randomWord(beautyRandom) } planet they now lived on. They called up all their friends 
        and {story?.number} showed up. It was amazing. They drank {drink?.strDrink} and danced to {story?.artist}.
        They were having so much that they attracted some unexpected guests! { randomWord(sizeRandom) } {story?.color} aliens
        with big {story?.bodyPart} ended up being the life of the party. Username gave alienName a drink 
        and a object. They were having so much fun everyone was cheering action word for them
        keep the party going. They partied for time. Everyone decided they needed to make it a
        tradition celebrating how great life was on {spaceObject?.name} with teh new alien friends
        they met! So every time time it is time of day every time they celabreate with drink!
      </p>
    </div>
  )
}