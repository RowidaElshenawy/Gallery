import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom"


const Error = () => {
  const error =useRouteError();
  let errorStatus: number;
  let errorStatusText :string;
  if(isRouteErrorResponse(error)){
    errorStatus=error.status
    errorStatusText=error.statusText
    }else{
      errorStatus=404
      errorStatusText="page not found"
    }
  return (
    <div className="flex flex-col justify-center items-center bg-red-200 h-screen text-[20px] font-medium ">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to={"/"} replace={true} className="text-center underline">How about going back to safety?</Link>
    </div>
  )
}

export default Error
