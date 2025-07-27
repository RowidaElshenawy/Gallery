import { cartItemChangeQuantity, removeItem } from "../../../redux/Cart/CartSlice";
import { useAppDispatch } from "../../../redux/hooks";
import type { TProduct } from "../../shared/Types/product"

type TCartProps=TProduct
const CartItems = ({title,image,price,id,quantity}:TCartProps) => {
  const dispatch =useAppDispatch()
  return (
    <div className="flex flex-col  md:flex-row justify-between border-b-2 border-gray-400 py-5 items-center">
      <div className=" md:flex md:items-center md:justify-between md:w-[50%]  text-center p-2 border-gray-200 border-[2px] rounded">
        <div className="h-[500px] md:w-[400px] md:h-[200px]  ">
            <img className="w-full h-full" src={image} alt={title} />
        </div>
        <div className="text-[20px] font-serif md:w-[30%]">
            <h1>{title.split(" ").slice(0,2).join(" ")}</h1>
            <p>{`${price} EGP`}</p>
        </div>
      </div>

      <div className="my-7 w-[50%] flex justify-center items-center gap-3">
        <button onClick={() => {quantity as number > 1 && dispatch(cartItemChangeQuantity({ id, chooseQuantity: quantity as number - 1 }))}}  className="bg-gray-300 text-lg px-3 py-1 rounded hover:bg-gray-400">
          -
        </button>
        <span className="text-lg font-bold">{quantity}</span>
        <button onClick={() => {dispatch(cartItemChangeQuantity({ id, chooseQuantity: quantity as number + 1 }))}} className="bg-gray-300 text-lg px-3 py-1 rounded hover:bg-gray-400">
          +
        </button>
      </div>
      <button onClick={()=>dispatch( removeItem(id))}  type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
      
    </div>
  )
}

export default CartItems
