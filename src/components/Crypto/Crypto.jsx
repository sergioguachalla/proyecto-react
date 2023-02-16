import "./Crypto.css"

const Crypto = ({id,name,price,symbol,changePercent}) => {

   

   return (
      <div className="crypto" id={id}>
         <h2>{name}</h2>
         <div className="info">
            <p><span className="label">Precio: </span>{parseFloat(price).toFixed(3)}</p>
            <p><span className="label">Símbolo: </span>  {symbol}</p>
            <p>
               <span className="label">Variación 24Hrs: </span>
               <span className={parseFloat(changePercent) > 0 ? "positive" : "negative"}>{parseFloat(changePercent).toFixed(2)}%</span>
               </p>
         </div>
         {/* <h3>Precio: {price} USD</h3> */}
         
      </div>
   )
}

export default Crypto