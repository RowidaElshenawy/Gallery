
import { Link } from 'react-router-dom';
import type { TProduct } from '../../shared/Types/product';
type TProps =TProduct
const Product = (props:TProps) => {
    const {image,title}=props
  return (
    <div className='max-sm:w-[100%]  max-md:w-[50%] w-[25%] p-2 text-center '>
        <div className="inner bg-blue-500">
            <div className='h-[400px]'>
                <img src={image} alt={title} className='h-[100%] w-[100%]'/>
            </div>
            <h1>{title.split(" ").slice(0, 3).join(" ")}</h1>
            <Link  >Product Details</Link>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
