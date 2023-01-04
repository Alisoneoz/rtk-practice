import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList"
//importation of the action creator where to send the dispatched info
import { addToCart } from "../../store/cart/cartSlice";

const Menu = () => {

  const { productList } = useSelector(state => state.cart)
  const dispatch= useDispatch();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setError("");
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
        setIsLoading(false)
        console.log(response.data)
      })
      .catch(error => {
        setError({ error });
        console.log({ error });
        setIsLoading(false)
      })
  }

  useEffect(() => {fetchData()}, [])

  return (
    
    <div>
      {isLoading && <p>is loading </p>}
      {error && <p>there was a mistake and we are sorry</p>}
      <h2>Menu this is what you have in the Shopping Cart:</h2>
      {productList}
      
      <h2>let's send provisionally this</h2>
      <button onClick={()=>{
        dispatch(addToCart(["Masseratti"]))
      }} className="bg-slate-500 p-4 font-bold"> send Masseratti</button>
      <br/>
      
      {products.length > 0 && (
        <div className="grid grid-cols-3">
          {products.map((product)=>(
            <div key={product.id}>
              < ProductList product={product}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu