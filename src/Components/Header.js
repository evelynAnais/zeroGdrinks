import { Link } from 'react-router-dom'
import Carousels from './Carousels'

export default function Header() {
  return (
    <>
      <Carousels />
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to='/'>Home</Link>
          
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Space'>Space</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/Drinks'>Drinks</Link>
        </li>
      </ul>
    </>  
  )
}