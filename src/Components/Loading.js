export default function Loading({ svgSrc }) {
  return(
    <div class="d-flex flex-column justify-content-center align-items-center py-4">
      <img style={{'max-width':'100px'}} src={svgSrc} />
      <h4>Loading...</h4>
    </div>
  );
}