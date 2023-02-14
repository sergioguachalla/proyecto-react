
const Crypto = ({id,name,price,symbol}) => {
   return (
      <div className="crypto" id={id}>
         <h2>{name}</h2>
         <h2>{price} USD</h2>
         <h3>{symbol}</h3>
      </div>
   )
}

export default Crypto