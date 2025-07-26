
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/mainLayouts/MainLayout'
import Products from '../pages/Products/Products'
import Cart from '../pages/Cart.tsx/Cart'
import Error from '../pages/Error'
import ProductDetails from '../pages/ProductDetails/ProductDetails'

const router =createBrowserRouter([
  {path:"/",element:<MainLayout/>, errorElement:<Error/>,children:[
    {index:true,element:<Products/>},
    {path:"/cart" ,element:<Cart/>},
    {path:"/products/:id",loader:({params})=>{
      console.log(params.id);
      if(typeof params.id !== "string" ||! /^(0|[1-9]|1[0-9]|20)$/.test(params.id)){
        throw new Response("Bad Request",{
          statusText:"products not found" , status:400
        })
        return true
      }
      
    },element:<ProductDetails/>}
  ]}
])

const AppRouter = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRouter
