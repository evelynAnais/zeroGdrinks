import { Carousel } from 'react-bootstrap';
import SpaceInJar from '../Assets/SpaceInJar.jpg'

export default function Carousels() {
  return (
    <>
      <Carousel fade>
        {/* holder.js/800x400?text=First slide&bg=373940 */}
        <Carousel.Item style={{'height':"300px"}}>
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

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Flower.jpg/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>Fill in the blanks, laugh.</p>
          </Carousel.Caption>
        </Carousel.Item>

        

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>Learn about space.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Zero G Drinks</h3>
            <p>Learn about your drink.</p>
          </Carousel.Caption>
        </Carousel.Item> */}

      </Carousel>
    </>
  )
}    