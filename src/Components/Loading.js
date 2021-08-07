import Martini from '../assets/Martini.svg'

export default function Loading() {
  return(
    <div class="d-flex flex-column justify-content-center align-items-center py-4">
      <img style={{'max-width':'100px'}} src={Martini} />
      <h4>Loading...</h4>
    </div>
  );
}