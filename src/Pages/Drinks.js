export default function Drinks() {
  const [drink, setDrink] = useState({drinks: []});

  function spaceDrink() {
    randomDrink().then(setDrink)
  }
  useEffect(spaceDrink, [])

  return (
    <>Drinks
    
    </>
  )
}