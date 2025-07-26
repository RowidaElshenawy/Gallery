
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/mainLayouts/MainLayout'
import Products from '../pages/Products/Products'
import Cart from '../pages/Cart.tsx/Cart'
import Error from '../pages/Error'

const router =createBrowserRouter([
  {path:"/",element:<MainLayout/>, errorElement:<Error/>,children:[
    {index:true,element:<Products/>},
    {path:"/cart" ,element:<Cart/>}
  ]}
])

const AppRouter = () => {
  return (
    <div>
        <RouterProvider router={router}>
            <MainLayout/>
        </RouterProvider>
    </div>
  )
}

export default AppRouter
