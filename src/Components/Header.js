import { Link } from 'react-router-dom'
import Carousels from './Carousels'

export default function Header() {
  return (
    <>
      <Carousels />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Space'>Space</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Drinks'>Drinks</Link>
        </li>
      </ul>
    </>  
  )
}