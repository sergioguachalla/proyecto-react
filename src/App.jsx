import { useEffect,useState } from "react"
import axios from "axios"
import CryptoList from "./components/Crypto/CryptoList"

function App() {
  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()
  

  useEffect( () => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)
    })
    .catch(() => console.error("La petición falló"))
  },[])
  // if(!criptos) return <h1>Cargando...</h1>


  return (
    <>
    <h1>Lista de criptomonedas</h1>
    <ol>
      {/* { 
        criptos.map(({id,name,priceUsd}) => (
        <li key={id}>Nombre: {name} Precio: ${priceUsd} </li>
      ))
      } */}
      <CryptoList></CryptoList>
    </ol>
    </>
  )


}

export default App
