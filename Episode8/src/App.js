import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";//for routing configuration i import createBrowserRouter.and that createBrowserRouter create routing configuration for us.
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout=()=>{
    
     return (
        <div className="app "> 
            <Header/>
            {/* the Outlet  component from React Router is a placeholder that will be replaced with the content of the currently matched route when the application is navigated. Each route can have its own component that defines what should be displayed within this outlet.The React Router <Outlet/> component (from react-router-dom ) is used within the parent route element.*/}

            {/* Here i am pussing my childrens over outlet according to  route like if path:"/about" then <Outlet/> is replaced by <about/> component or if path:"/" then <Outlet/> is replaced by <body/> component*/}
            {/* Note:-Outlet always filled by children according to path. */}

            <Outlet/>


        </div> 
     )
} 
// we developing the router(appRouter) and pass the configuration inside the createBrowserRouter.
/* What is the configuration?
configuration mean some information which define what will happen on specific Route or we can say configuration is list of paths*/

/*What is path?
path is just an object and it contain two things first is path and second is element(i.e for specific path ,load given element )*/

// After creating this configuration, i need to provide this configuration for rendering.
/*How do i provide this configuration?
we use RouterProvider component to provide this routing configuration to our app.*/ 
const appRouter= createBrowserRouter([
    {
        path:"/",//we can call this root route(parent route)
        element:<AppLayout/>,//Here if path is '/' then load the homepage(<AppLayout/>)
        children:[//children routes of AppLayout and children is list of paths.
            {
                path: "/",
                element: <Body/>,
           },
           {
               path:"/about",//Here /about is children of AppLayout.
               element:<About/>
           },
           {
               path:"/contact",
               element:<Contact/>
           },
           {
            // we want this path should be dynamic because this path should be different for different restaurents and to make this path dynamic we use :(colon) and then give restaurantId.   
               path: "/restaurants/:resId",//resId is id of restaurant.
               element:<RestaurantMenu/>,
           }
        ],
        errorElement:<Error/> // errorElement:<Error/>//Here we create our own error page using errorElement (i.e if path: "/" then it render <AppLayout/> otherwise if there is any error then it load the <Error/> component which is created by us. )   
    }
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

//  This is how we use RouterProvider component to provide appRouter configuration to our app.
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter} />);
  
