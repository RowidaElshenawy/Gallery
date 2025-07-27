
import logo from"../../../assets/img/cartLogo.png"
import { getTotalQuantity } from "../../../redux/Cart/CartSlice";
import { useAppSelector } from "../../../redux/hooks"
const HeaderBasket = () => {
  const cartItems=useAppSelector(getTotalQuantity)
  return (
    <div className='relative flex max-md:items-center'>
        <h1>Cart</h1>
        <img className="w-[30px]" src={logo} alt="cartLogo" />
        <div className='flex  justify-center items-center  absolute max-md:left-[100px] max-md:top-[2px] -right-[15px] -top-[10px]  h-[23px] w-[23px] rounded-full bg-cyan-400 text-center text-[15px]'>{cartItems}</div>
    </div>
  )
}

export default HeaderBasket
