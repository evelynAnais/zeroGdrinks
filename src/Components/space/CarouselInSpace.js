import { Carousel } from "react-bootstrap"
import SpaceImg from '../../assets/Space.jpg'

export default function CarouselView({ spacePeople }) {
  const galaxyPeoples = spacePeople.people.map((peoples, index) => (
    <Carousel.Item key={index} style={{'height':'80px'}}>
      <img
        style={{'width':'100%'}}
        className="d-block w-100"
        src={SpaceImg}
        alt="First slide"
      />
      <Carousel.Caption style={{'height':'75px'}}>
        <h5 className='spacecarousel'>People currently in space!</h5>
        <p>{peoples.name}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))
  return (
    <Carousel fade controls={false}>
      {galaxyPeoples}
    </Carousel>
  )
}

