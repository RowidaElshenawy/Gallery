import { useEffect, useState } from "react"
import Product from "../../components/gallery/Product/Product"
import { useAppDispatch, useAppSelector} from "../../redux/hooks"
import { actGetProducts } from "../../redux/products/productsSlice"
import Loading from "../../components/feedback/Loading/Loading"
import { Helmet } from "react-helmet";
const Products = () => {
  
  const dispatch =useAppDispatch()
  const {records,loading,error}=useAppSelector(state=>state.products)
  
  const[searchTearm ,setSearchTearm]=useState("")
  const filterProducts=searchTearm ? records.filter(record=>
    record.title?.toLowerCase().split(" ").includes(searchTearm.toLocaleLowerCase())
  ):records

  const [sortType,setSortType]=useState("")
  const sortedProducts= sortType ? [...filterProducts].sort((a,b)=>{
    if(sortType === "lowHigh"){
      return a.price - b.price
    }else if(sortType === "highLow"){
      return b.price - a.price
    }else if (sortType === "nameAZ") {
      return a.title.localeCompare(b.title)
    }
    return 0
  }) :filterProducts;

  const productList =sortedProducts.length > 0  ? sortedProducts.map((record)=>{
    return <Product key={record.id} {...record}/>
  }): "there are no products"
  
  

  useEffect(()=>{
    dispatch(actGetProducts())
    console.log(records);
    
  },[dispatch])

  return (
    <>
    <Helmet>
        <title>Products Gallery</title>
    </Helmet>
    <Loading loading={loading} error={error}>
      <div>
        <input type="search" onChange={(e)=>setSearchTearm(e.target.value)} id="default-search" className="block w-[80%] mb-5 m-auto p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name..." required />
        <select onChange={(e)=>setSortType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blutoe-500 focus:border-blue-500 block w-[80%] m-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Sort by</option>
            <option value="lowHigh">price:Low to High</option>
            <option value="highLow">price:High to Low</option>
            <option value="nameAZ">Name:A to Z</option>
        </select>
      </div>
      <div className="flex flex-wrap py-4">{productList}</div>
    </Loading>
    </>
  )
}

export default Products
