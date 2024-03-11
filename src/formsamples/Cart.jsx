import {useState} from 'react'

export const Cart = () => {
    const [cartCount,setCartcount] = useState(0);
    const handelclick = ()=> setCartcount(cartCount+1);
  return (
    <>
    <h1>Number of Items in the Cart : {cartCount}</h1>
    <button onClick={handelclick}>Add to cart</button>
    </>
  )
}
