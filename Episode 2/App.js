import React from "react"
import ReactDOM from "react-dom/client"
//Now we create nested html structure inside react.js
{/* <div id="parent">
    <div id="child">
        <h1>I am h1</h1>
    </div>
</div> */}

const parent=React.createElement("div",
{id:"parent"},
React.createElement(
    "div",
    {id:"child"},
    React.createElement("h1",{},"I am h1")
)
);

//Now we create nested html siblings structure inside react.js and to create siblings we use array.
{/* <div id="parent1">
    <div id="child1">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>
</div> */}
const parent1=React.createElement("div",
{id:"parent1"},
React.createElement(
    "div",
    {id:"child1"},
   [React.createElement("h1",{},"I am h1"),React.createElement("h2",{},"I am h2")]
)
);



// writing helloworld programme using react.js
const heading= React.createElement("h1", {id:"heading"} , "Hello World from Namaste React.js ")
console.log(heading)//heading is an object which type is h1.heading is not h1 tag.
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render(parent);
// root.render(parent1);

// What is bundler?
// A bundler in React is a tool that allows developers to package their code into a single file or bundle. 
// They allow developers to bundle their code, including libraries and frameworks, into a single file. This makes it easier to deploy and run the application, as well as making the code more efficient and maintainable.
// In other words, a bundler is a tool that helps you manage the dependencies and assets of your React application, and package them into a single file (or a few files) that can be served to the browser.
