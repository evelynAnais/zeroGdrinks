import { Card } from 'react-bootstrap'

export default function Intro() {
  return (
    <div className='container'>
      <Card>
        <Card.Body className='card'>
          <h5>You want to drink, I want you to drink, learn about space and laugh!</h5>
          <p>Let's make this quick, fill in the blanks and click "Lets's do this!" You will
            get a funny story, or at least I hope it's funny haha! Then you will get two 
            cards with info about your drink and a space object.</p>
          <p>Then feel free to explore the Drinks and Space sections to learn more 
            about random space objects and get random drink ideas!</p>
        </Card.Body>
      </Card>
    </div>
  )
}