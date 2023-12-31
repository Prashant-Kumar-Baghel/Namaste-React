import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";//To use Header file in this file we have to import it and we can also use .js extenstion in last("./components/Header.js") so both way are same.
import Body from "./components/Body";


const AppLayout=()=>{
    console.log(<Body/>);//This line code gives us an javascripit object which is called virtual dom. i mean to say if there is any big structure it is an object. 
     return (
        <div className="app "> 
            <Header/>
            <Body/>
        </div>
     )
}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);//Way to render an React Functional Component.
