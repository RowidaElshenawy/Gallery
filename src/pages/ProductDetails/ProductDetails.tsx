import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { actGetProductById, productCleanUP } from "../../redux/ProductDetails/ProductDetailsSlice"
import { useParams } from "react-router-dom"
import Loading from "../../components/feedback/Loading/Loading";
import { addToCart } from "../../redux/Cart/CartSlice";

const ProductDetails = () => {
    const dispatch =useAppDispatch()
    const params = useParams()
    const {product,error,loading}=useAppSelector(state=>state.details)
useEffect(()=>{
    if(params.id && typeof params.id === "string"){
        dispatch(actGetProductById(params.id))
    }
    console.log(product,"helllo");
    return ()=>{
        dispatch(productCleanUP())
    }
    
},[dispatch , params])
  return (
    <Loading loading={loading} error={error}>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-auto my-5">
            <div >
                <img className="p-8 rounded-t-lg" src={product.image} alt={product.title} />
            </div>
            <div className="px-5 pb-5 text-center">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title?.split(" ").slice(0,2).join(" ")}</h5>
                <p>{product.description}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <span>{product.rating?.rate}</span>
                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{`${product.rating?.count} reviews`}</span>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white p-3">{`${product.price} EGP`}</span>
                    <button onClick={()=>dispatch(addToCart(product.id))}  type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to Cart</button>
                </div>
            </div>
        </div>
    </Loading>

  )
}

export default ProductDetails
