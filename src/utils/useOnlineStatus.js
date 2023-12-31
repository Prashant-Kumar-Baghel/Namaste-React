import { useEffect, useState } from "react"
//To write the custom hook, first findout the input and output for that hook. 

//To create the useOnlineStatus hook we don't need any information from caller(caller mean wherever that hook is used)
const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{

        // these event lisener keep track of when the internet is online or offline so these event lisener is a superpower which given to us by window object or browser.
        //we just need to add these event lisener once to webpage and for that we use useEffect hook.Now that event lisener job keep track of when the internet is online or offline .
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        // The online event of the Window interface is fired when the browser has gained access to the network. 
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])
    //return boolen value.
    return onlineStatus;
}
export default useOnlineStatus;