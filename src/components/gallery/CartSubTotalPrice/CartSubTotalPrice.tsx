import type { TProduct } from "../../shared/Types/product"

type TSubtotalProps=TProduct[];

const CartSubTotalPrice = (productWithQuantiy:TSubtotalProps) => {
  console.log(Object.values(productWithQuantiy));
  
  const total =Object.values(productWithQuantiy).reduce((accumolator,el)=>{
    const price =el.price;
    if(el.quantity && typeof el.quantity === "number"){
      const quantity = el.quantity;
       return accumolator + price * quantity
    }else{
      return accumolator
    }
  },0)
  return (
    <div className="pt-3 font-serif text-[20px]">
      <span>{`Subtotal : ${total} EGP`}</span>
    </div>
  )
}

export default CartSubTotalPrice
