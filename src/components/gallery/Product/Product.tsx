
import { Link } from 'react-router-dom';
import type { TProduct } from '../../shared/Types/product';
import { useAppDispatch } from '../../../redux/hooks';
import { addToCart } from '../../../redux/Cart/CartSlice';
type TProps =TProduct
const Product = (props:TProps) => {
  const dispatch = useAppDispatch()
    const {id,image,title}=props
  return (
    
    <div className='max-sm:w-[100%]  max-md:w-[50%] w-[25%] p-3 text-center  '>
        <div className="inner   bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[550px] ">
            <Link to={`/products/${id}`} >
                    <div className='h-[400px] flex justify-center'>
                        <img src={image} alt={title} className='h-[100%] w-[90%]'/>
                    </div>
                    <h1 className='p-4 text-lg font-medium'>{title?.split(" ").slice(0, 3).join(" ")}</h1>
            </Link>
            <button onClick={()=>dispatch(addToCart(id))}   type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
