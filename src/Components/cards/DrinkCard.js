import { Card } from 'react-bootstrap'

export default function DrinkCard({ drink }) {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-around'>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant='top' src={ drink?.strDrinkThumb } />
          <Card.Body>
            <Card.Title>{ drink?.strDrink }</Card.Title>
            <Card.Text style={{'list-style':'none'}}>
              {(drink?.strMeasure1 || drink?.strIngredient1) &&
              <li>{ drink?.strMeasure1 } { drink?.strIngredient1 }</li>
              }
              {(drink?.strMeasure2 || drink?.strIngredient2) &&
              <li>{ drink?.strMeasure2 } { drink?.strIngredient2 }</li>
              }
              {(drink?.strMeasure3 || drink?.strIngredient3) &&
              <li>{ drink?.strMeasure3 } { drink?.strIngredient3 }</li>
              }
              {(drink?.strMeasure4 || drink?.strIngredient4) &&
              <li>{ drink?.strMeasure4 } { drink?.strIngredient4 }</li>
              }
              {(drink?.strMeasure5 || drink?.strIngredient5) &&
              <li>{ drink?.strMeasure5 } { drink?.strIngredient5 }</li>
              }
              {(drink?.strMeasure6 || drink?.strIngredient6) &&
              <li>{ drink?.strMeasure6 } { drink?.strIngredient6 }</li>
              }
              {(drink?.strMeasure7 || drink?.strIngredient7) &&
              <li>{ drink?.strMeasure7 } { drink?.strIngredient7 }</li>
              }
              {(drink?.strMeasure8 || drink?.strIngredient8) &&
              <li>{ drink?.strMeasure8 } { drink?.strIngredient8 } </li>
              }
              {(drink?.strMeasure9 || drink?.strIngredient9) &&
              <li>{ drink?.strMeasure9 } { drink?.strIngredient9 }</li>
              }
              {(drink?.strMeasure10 || drink?.strIngredient10) &&
              <li>{ drink?.strMeasure10 } { drink?.strIngredient10 }</li>
              }
              {(drink?.strMeasure11 || drink?.strIngredient11) &&
              <li>{ drink?.strMeasure11 } {drink?.strIngredient11 }-</li>
              }
              {(drink?.strMeasure12 || drink?.strIngredient12) &&
              <li>{ drink?.strMeasure12 } { drink?.strIngredient12 }</li>
              }
              {(drink?.strMeasure13 || drink?.strIngredient13) &&
              <li>{ drink?.strMeasure13 } { drink?.strIngredient13 }</li>
              }
              {(drink?.strMeasure14 || drink?.strIngredient14) &&
              <li>{ drink?.strMeasure14 } { drink?.strIngredient14 }</li>
              }
              {(drink?.strMeasure15 || drink?.strIngredient15) &&
              <li>{ drink?.strMeasure15 } { drink?.strIngredient15 }</li>
              }
            </Card.Text>
            <Card.Text>
              { drink?.strInstructions }
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>  
  )
}