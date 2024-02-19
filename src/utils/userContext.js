import { createContext } from "react";
//React give us acccess to createContext function to create userContext and we give some piece of information that will hold it's kind of central object .

//Way To Create Context.
const userContext=createContext({
    loggedInUser:"Default value"
})
export default userContext;