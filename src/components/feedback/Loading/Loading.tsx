import type { ReactNode } from "react";
import type { TLoading } from "../../shared/Types/shared"
import { MoonLoader } from "react-spinners";

interface ILoadingProps{
    loading:TLoading;
    error:null|string;
    children:ReactNode;
}

const Loading = ({loading,error,children}:ILoadingProps) => {
    if(loading==="pending"){
        return <div className="h-screen flex justify-center items-center"><MoonLoader color="purple" /></div>
    }
    if(loading==="failed"){
        return <p>{error}</p>
    }
    if(loading==="succeeded"){
        return <>{children}</>
    }
}

export default Loading
