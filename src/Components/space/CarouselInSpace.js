import { Carousel } from 'react-bootstrap';
import SpaceImg from '../../assets/Space.jpg';

export default function CarouselView({ spacePeople }) {
  const galaxyPeoples = spacePeople.people.map((peoples, index) => (
    <Carousel.Item key={index} style={{ 'height':'80px', 'display':'flex', 'align-items':'center'}}>
      <img
        style={{'width':'100%'}}
        className='d-block w-100'
        src={SpaceImg}
        alt='First slide'
      />
      <Carousel.Caption style={{'height':'80px','bottom':'0px' }}>
        <p style={{'margin':'0px', 'fontSize':'13px'}}>People currently in space!</p>
        <p style={{'margin':'0px'}}>{peoples.name}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))

  return (
    <Carousel fade controls={false}>
      {galaxyPeoples}
    </Carousel>
  );
}

