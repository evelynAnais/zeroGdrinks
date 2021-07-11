import { Card } from 'react-bootstrap'

export default function Intro() {
  return (
    <Card>
      <Card.Body className='card'>
        <h6>You want to drink, I want you to drink, learn about space and laugh!</h6>
        <p>Let's make this quick, fill in the blanks and click submit! You will
          get a funny story, or at least I hope it's funny '[insert chuckle]!'
          You will also get two cards with info about your drink and a space object.</p>
        <p>Then feel free to explore the Drinks and Space sections to learn more 
          about random space objects and get random drink ideas!</p>
      </Card.Body>
    </Card>
  )
}