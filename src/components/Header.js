import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnName,setBtnName]= useState("Login");
    /* if dependency array is [btnName] then useEffect will call everytime when btnName is updated.
    useEffect(()=>{
        console.log("Header Render")
    },[btnName])*/

    /*Don't create useState inside function like below(that is don't use in nested function)
    function(){
        const [temp,setTemp]=useState("");
    }*/
    return (
        <div className="header">    

            <div className="logo-container">
                <img 
                className="logo"
                src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                
                    <ul>
                        {/* when we use the react and want to navigate to another page, never use anchor tag because the whole page got refereshed.  */}

                        {/* To navigate to another page without reloading whole page we use Link component instead of anchor tag and in Link component we use <to> attribute to provide path.*/} 

                        {/* Link doesnot reload the whole page it just refreshed the components(i.e it just changes the components) and thatswhy our react application known as single page application.   */}

                        {/* single page application mean it is a whole single page(i.e it is a whole single component(app.js)) and all the routing(all new pages) are just components interchanging themselves. */}


                        {/* When i click on Home then it doesnot reload whole page it just fetches the data. */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li>Cart</li>
                        <button className="log-btn" onClick={()=>{
                            btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
                        }}>{btnName}</button>
                    </ul>
                
            </div>

        </div>
    )
} 
export default Header;//To use Header file in another file we have to export it.




/*What is server side routing?
Server-side routing involves the server handling the routing and rendering of different views.
When a user click on any anchor tag(like "/about") then it reload the whole page and  then browser sends a request to the server, and the server determines which view or page to render based on the URL.
Each time the user navigates to a different route, the browser sends a new request to the server, and the server responds with the corresponding HTML content.
Server-side routing is more traditional and is commonly used in multi-page applications (MPAs).
*/

/* What is client side routing?
1) Client-side routing is the most common approach in modern single-page applications (SPAs) built with React.
2)In client-side routing, the navigation and rendering of different pages or views are handled entirely on the client side, within the browser, without making additional requests to the server for each route change.
3)When a user clicks a link or enters a URL, React Router(React Router is a standard library for routing in React applications) updates the browser's URL and renders the appropriate React component based on the route configuration.
4)Client-side routing provides a smoother and more responsive user experience because it eliminates the need to reload the entire page for each route change.
5)In client side routing, all the components already loaded into our app.so when i go to about us page then it only load that component it doesnot make any network call.only network call make during fetching data from api  */

/*What is Routing?
Routing refers to the process of navigating between different views or components based on the URL.*/