import Crypto from "./Crypto"
import { useEffect,useState } from "react"
import axios from "axios"
const CryptoList = () => {

   const [cryptoList, setCryptoList] = useState()
   const API_URL = import.meta.env.VITE_API_URL
   useEffect( () => {
      axios.get(`${API_URL}assets`)
      .then((data) => {
        setCryptoList(data.data.data)
      })
      .catch(() => console.error("La petición falló"))
    },[])
   if(!cryptoList) return <h1>Cargando...</h1>
   return (
      <ol>
      <div className="crypto-list">
         {cryptoList.map(({id,name,priceUsd,symbol}) => (
            <Crypto
            key={id}
            name={name}
            price={priceUsd}
            symbol={symbol}
            />
         ))}
      </div>
      </ol>
   )
}

export default CryptoList
