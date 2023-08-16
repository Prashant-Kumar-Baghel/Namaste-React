import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement=> ReactElement(JS object)=>HTMLELement(render)
// const heading= React.createElement("h1", {id:"heading"} , "Hello World from Namaste React.js ");

//JSX
// JSX=>React.createElement=> ReactElement(JS object)=>HTMLELement(render)
const elem=<span>React element</span>;
const jsxheading= (<h1 id="heading" className="head">
    {/* Putting one element in another element.  */}
    {elem}
    Namaste React using Jsx
    </h1>)
const number=1000;
//Arrow function
/*arrow function gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return  keyword:
const root=ReactDOM.createRoot(document.getElementById("root"));
ex:-
const fn1 = () => {
  return "Hello World!";
}
const fn2 = () => "Hello World!";
root.render(jsxheading);

fn1 and fn2 are same.

Arrow Function With Parameters:
hello = (val) => "Hello " + val;
In fact, if you have only one parameter, you can skip the parentheses as well:

Arrow Function Without Parentheses:
hello = val => "Hello " + val;*/

//React Functional Component .
const Title=()=>(<h1>Namaste React</h1>);//wrap h1 into round bracket for multiple lines.


/*Suppose we are getting some data from api(like const data=api.getdata();) and that data is some kind of mallesious data which will run in laptops and if attacker get access to run javascript in laptop then attacker can steal cookies, read localStorage , get information of laptop  and this type of attack known as cross-side scripting.But jsx is take care of these attacks.Basically jsx just escape mallesious code.whatever we write inside curlie bracket that will sanitize and pass further or prevent cross-side scripting.*/
//Component Composition 
const HeadingComponent=()=>{
    return <div className="container">
        {/* Putting component inside a component.<Title/> and <Tittle></Tittle> both gives same result.*/}
        <Title/>
        {/* Putting javaScript code inside a curlie brscket.*/}
        {number}
        {10+10}
        {/* Putting jsxheading element inside component */}
        {jsxheading}
        {console.log("hello")}
        {/* At the end, component is a javaScript function hence hence we can also write component inside curlie bracket.  */}
        {Title()}
        <h1>Namaste React Functional Component</h1>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);//Way to render an React Element
root.render(<HeadingComponent/>);//Way to render an React Functional Component.
