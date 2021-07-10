import { Carousel } from 'react-bootstrap';
import SpaceInJar from '../assets/SpaceInJar.jpg';
import Party from '../assets/Party.jpg';
import SpaceTree from '../assets/SpaceTree.jpg';
import LetsDrink from '../assets/LetsDrink.jpg';

export default function Carousels() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item style={{'height':'275px'}}>
          <img
            style={{'width':'100%'}}
            className="d-block w-100"
            src={SpaceInJar}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>because why not</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':'275px'}}>
          <img
            style={{'width':'100%'}}
            className="d-block w-100"
            src={Party}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>Fill in the blanks, laugh.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':'275px'}}>
          <img
            style={{'width':'100%'}}
            className="d-block w-100"
            src={SpaceTree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>Learn about space.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':'275px'}}>
          <img
            style={{'width':'100%'}}
            className="d-block w-100"
            src={LetsDrink}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>Learn about your drink.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}    