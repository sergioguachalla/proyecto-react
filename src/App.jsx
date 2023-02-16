import { useEffect,useState } from "react"
import axios from "axios"
import Crypto from "./components/Crypto/Crypto"
import "./app.css"
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
   if(!criptos) return <h1>Cargando...</h1>


  return (
    <div className="app-container">
    <h1>Lista de criptomonedas</h1>
    <div className="crypto-container">
      {  
        criptos.map(({id,name,priceUsd,symbol,changePercent24Hr}) => (
          <Crypto
          key={id}
          name={name}
          price={priceUsd}
          symbol={symbol}
          changePercent={changePercent24Hr}
          />
      ))
      }
      </div> 
      
    
    </div>
  )


}

export default App
