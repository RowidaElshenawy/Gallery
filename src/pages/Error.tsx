import { Link } from "react-router-dom"


const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-red-200 h-screen text-[20px] font-medium ">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to={"/"} replace={true} className="text-center underline">Looks like you have reached to non existent page.<br/>How about going back to safety?</Link>
    </div>
  )
}

export default Error
