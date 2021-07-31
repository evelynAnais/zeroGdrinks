import { Card } from 'react-bootstrap'
import { randomWord, weatherRandom, timeOfDayRandom, timeRandom, sizeRandom, beautyRandom, timesRandom } from "../../utils/randomWords"

export default function Story({ drink, spaceObject, story }) {
  return (
    <div className='container'>
      <Card>
        <Card.Body>
          <h3>Drinking with { story?.name } in Space!!!</h3>
          <p>On a { randomWord(weatherRandom) } { randomWord(timeOfDayRandom) } in a galaxy called 
            the milky way { story?.name } woke up feeling { story?.feeling } and remembered humanity now lives 
            on { spaceObject?.name }. Reminiscing about the { story?.descriptive } days back on earth, { story?.name }, 
            decided to call { story.friend }. They were going to have a party even though it had 
            been { randomWord(timeRandom) } since anyone had been on earth. Such a { randomWord(sizeRandom) } planet
            compared to the { randomWord(beautyRandom) } planet they now lived on. They called up all their friends 
            and {story?.number} showed up. It was amazing. They drank { drink?.strDrink } and danced to {story?.artist}.
            They were having so much fun that they attracted some unexpected guests! { randomWord(sizeRandom) } {story?.color} aliens
            with big {story?.bodyPart} who ended up being the life of the party. { story.friend } gave {story?.idol} the alien
            a { drink?.strDrink } and a {story?.object}. They were having so much fun! Everyone was cheering them on to
            keep the party going. They partied for { randomWord(timeRandom) }. Everyone decided they needed to make it a
            tradition to celebrate how great life was on {spaceObject?.name} with their new alien friends! So 
            every {story?.number} { randomWord(timesRandom) } they celebrate with { drink?.strDrink } for { randomWord(timeRandom) }!
          </p>
        </Card.Body>
      </Card>
    </div>
  )
}