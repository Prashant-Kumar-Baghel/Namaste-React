import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header=()=>{
    const [btnName,setBtnName]= useState("Login");
    // Way to access context (We use React useContext hook to access context and we pass the context inside useContext hook that we want to use.we pass the context inside useContext hook because in react we can create multiples contexts. ) 
    const {loggedInUser}=useContext(userContext);
    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-md m-2 items-center px-5 container mx-auto overflow-hidden">  
        {/* className="flex" makes display as flex of div container and w-15 set the width*/}
            <div className="logo-container">
                <img 
                className="w-15"
                src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                
                    <ul className="flex p-5 m-4">

                        <li className="px-4"><Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="/about">About Us</Link></li>
                        <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                        <li className="px-4">Online Status:-{onlineStatus?"🟢":"🔴"}</li>
                        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                        {/* red and green ball should be string. */}
                        <li className="px-4">Cart</li>
                        <button className="log-btn" onClick={()=>{
                            btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
                        }}>{btnName}</button>

                        {/*Using The Context*/}
                        <li className="px-4">{loggedInUser}</li>
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