import { useRouteError } from "react-router-dom";//we use useRouteError hook which provide by react-router-dom to provide more information about error.


const Error=()=>{
    const err=useRouteError();//useRouteError() hook return information about an error in the form of object and err object contain all the details about that error.
    // console.log(err);
    return(
        <div className="error">
            <h1>Oops!!!!</h1>
            <h2>Something went wrong !!</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error;