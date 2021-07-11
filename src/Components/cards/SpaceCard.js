import { Card } from 'react-bootstrap'

export default function SpaceCard({ spaceObject }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant='top' src='' />
      <Card.Body>
        <Card.Title>{spaceObject?.englishName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}