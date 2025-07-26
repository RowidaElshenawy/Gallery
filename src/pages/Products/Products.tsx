import { useEffect, useState } from "react"
import Product from "../../components/gallery/Product/Product"
import { useAppDispatch, useAppSelector} from "../../redux/hooks"
import { actGetProducts } from "../../redux/products/productsSlice"


const Products = () => {
  const[searchTearm ,setSearchTearm]=useState("")
  const dispatch =useAppDispatch()
  const {records,loading,error}=useAppSelector(state=>state.products)
  const filterProducts=searchTearm ? records.filter(record=>
    record.title.toLowerCase().includes(searchTearm.toLocaleLowerCase())
  ):records
  const productList =filterProducts.length > 0  ? filterProducts.map((record)=>{
    return <Product key={record.id} {...record}/>
  }):"there are no products"
  

  useEffect(()=>{
    dispatch(actGetProducts())
    console.log(records);
    
  },[dispatch])
  return (
    <div>
      <div>
        <input type="search" onChange={(e)=>setSearchTearm(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name..." required />
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blutoe-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select>
      </div>
      <div className="flex flex-wrap py-4">{productList}</div>
    </div>
  )
}

export default Products
