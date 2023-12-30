import React, { lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";//for routing configuration i import createBrowserRouter.and that createBrowserRouter create routing configuration for us.
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"; //For create Grocery  different bundle we donot import Grocery component like this .
 


//this is how we import grocery to create its different bundler. we use lazy to import Grocery. 
//lazy is an function which is given us to by react and which is named export.lazy takes a callback function and in that callback function we can write our import.
/*Define the import which present in lazy?
Ans:- this import basically a function and that function take the path of grocery. */
/*Intially On first time when we navigate to glocery page then get error because when we load the homepage we got only one javascript file  and that js file doesnot has glocery code now i am loading glocery code on demand i.e when i click  glocery button then my glocery code will be loading but it takes 12ms to 13ms to come to browser.but react is very fast an react try to load grocery component and code is not there and react suspending the rendering. we use Suspense component to remove this error and we wrap our grocery component in suspense component.  */
/*What is Suspense?
It is component which come from React and wrap this Suspence over the component which is not available at the moment and give the placeholder(fallbak) to suspense. */

// when we load the homepage we got only one javascript file  and that js file doesnot has glocery code. when i click  glocery button then my glocery code will be loading but it takes 12ms to 13ms to come to Browser.but react try to load something so meanwhile intermediatly react want something to present on screen and you can give that inside fallback inside Suspense.
// In fallback you can pass shimmer UI,tag etc.


const Grocery= lazy(()=>import("./components/Grocery"));
/*Now After using the lazy function, when we go to glocery page then we able to see glocery(js) file in inspect->network->js.*/
// Now main bundle doesnot has glocery component and glocery bundle has glocery code.
//when we check dist folder we also get glocery js file.

//Lazy Loading for About Us Page
const About= lazy(()=>import("./components/About"))

const AppLayout=()=>{
    
     return (
        <div className="app "> 
            <Header/>
            <Outlet/>
        </div> 
     )
} 

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
               element: <Suspense fallback={<h1>Loding....</h1>}><About/></Suspense>//    In JSX, curly brackets {} are used to embed JavaScript expressions or values within the markup. In this code, the curly brackets are used to wrap a JavaScript expression inside the fallback prop of the <Suspense> component.
           },
           {
               path:"/contact",
               element:<Contact/>
           },
           {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loding....</h1>}><Grocery/></Suspense>
           }
        //    We can see fallback by insect->Network-> Replace No throtting by slow 3g
           ,
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
  
