
import CartSubTotalPrice from "../../components/gallery/CartSubTotalPrice/CartSubTotalPrice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { useEffect } from "react"
import { actGetProducts } from "../../redux/products/productsSlice"
import CartItems from "../../components/gallery/CartItems/CartItems"
import { Helmet } from "react-helmet";


const Cart = () => {
  const dispatch=useAppDispatch()
  const products =useAppSelector((state)=>state.products.records)
  console.log(products);
  
  const cartItems =useAppSelector((state)=>state.cart.items)
  const  cartId =Object.keys(cartItems).map(id=> Number(id))
  console.log(cartId);
  useEffect(()=>{
    if(!products.length){
      dispatch(actGetProducts())
    }
  },[dispatchEvent,products.length])
  const productInYourCart= products.filter(el=> cartId.includes(el.id as number))
  const productWithQuantity= productInYourCart.map(el=> ({...el,quantity:cartItems[el.id as number]}))
  
  const cartList=productWithQuantity.map(el=> <CartItems {...el}/>)
  return (
    <>
    <Helmet>
            <title>Cart</title>
    </Helmet>
    <div className="my-15">
      <h1 className="font-bold text-[25px]">Your Cart :</h1>
      <>{cartList}</>
      <CartSubTotalPrice {...productWithQuantity}/>
    </div>
    </>
  )
}

export default Cart
