import { Card } from 'react-bootstrap'
import { randomWord, weatherRandom, timeOfDayRandom, timeRandom, sizeRandom, beautyRandom, timesRandom, partyRandom, sizesRandom, amazingRandom, unexpectedRandom } from "../../utils/randomWords"

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
            and {story?.number} showed up. It was a { randomWord(partyRandom) }. They drank { drink?.strDrink } and 
            danced to { story?.artist }. They were having so much fun that they attracted 
            some { randomWord(unexpectedRandom) } guests! Aliens, { randomWord(sizeRandom) } { story?.color } aliens
            with { randomWord(sizesRandom) } {story?.bodyPart} who ended up being the life of the 
            party. { story.friend } gave { story?.person } the alien a { drink?.strDrink } and a { story?.object }. They 
            were having so much fun! They partied for { randomWord(timeRandom) }. Everyone decided they needed to 
            make it a tradition to celebrate how { randomWord(amazingRandom) } life was on { spaceObject?.name } with 
            their new alien friends! So every { story?.number } { randomWord(timesRandom) } they celebrate 
            with { drink?.strDrink } and { story?.person } the alien!
          </p>
        </Card.Body>
      </Card>
    </div>
  )
}