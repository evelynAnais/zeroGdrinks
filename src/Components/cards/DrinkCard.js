import { Card } from 'react-bootstrap'

export default function DrinkCard({ drink }) {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-around'>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant='top' src={ drink?.strDrinkThumb } />
          <Card.Body>
            <Card.Title>{ drink?.strDrink }</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>  
  )
}