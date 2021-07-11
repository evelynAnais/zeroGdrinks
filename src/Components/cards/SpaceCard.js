import { Card, ListGroup } from 'react-bootstrap'

export default function SpaceCard({ spaceObject }) {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-around'>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Header style={{ width: '18rem' }}>Name: {spaceObject?.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>English Name: {spaceObject?.englishName}</ListGroup.Item>
            <ListGroup.Item>Discovered By: {spaceObject?.discoveredBy}</ListGroup.Item>
            <ListGroup.Item>Discovered Day: {spaceObject?.discoveryDate}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  )
}

