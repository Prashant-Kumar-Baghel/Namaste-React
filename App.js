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



// creating h1 tag using react
const heading= React.createElement("h1", {id:"heading"} , "Hello World from React.js")
console.log(heading)//It will give object.
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render(parent);
// root.render(parent1);
