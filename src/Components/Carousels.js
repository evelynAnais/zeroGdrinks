import Carousel from 'react-bootstrap/Carousel';

export default function Carousels() {
  return (
    <>
      <Carousel fade>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
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
            src="holder.js/800x400?text=Second slide&bg=282c34"
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
            <p>Learn how to make your drink and about space.</p>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
    </>
  )
}    