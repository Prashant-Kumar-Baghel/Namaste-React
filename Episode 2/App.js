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

// Bundlers, as mentioned earlier, are tools that take various files, such as JavaScript, CSS, and other assets, and combine them into a single or a few files. This process is known as bundling. Instead of having multiple separate files for different parts of your application, bundlers consolidate them into a more organized and manageable structure.
// Bundlers are capable of handling not only your application code but also external libraries and frameworks that your project depends on. These libraries and frameworks can be integrated into the final bundle, streamlining the deployment process and reducing the number of separate files that need to be managed.


// -----------------------------------
// Q-what different files present in single file or bundle?
// Ans:-  Here are the common types of files that might be present in a single bundle:
// 1)JavaScript Files:

// All JavaScript files in the project, including the application's main entry file and any modules or dependencies, are typically bundled together. This could involve transpiling modern JavaScript (ES6+) into an older version for broader browser compatibility.

// CSS Files:
// Stylesheets, whether written in CSS, Sass, or another styling language, are often included in the bundle. Bundlers can process and optimize stylesheets as part of the bundling process.

// HTML Files:
// The HTML file(s) that serve as the entry point(s) for the application may be included in the bundle. Some bundlers inject the necessary script and style tags into the HTML during the bundling process.

// Images and Other Assets:
// Images, fonts, and other static assets referenced by the application can be included in the bundle. Depending on the bundler and its configuration, these assets may be transformed or optimized as well.

// Dependencies and Third-Party Libraries:
// JavaScript files for external dependencies and third-party libraries, which are imported in the project, may be included in the bundle. This is common for libraries like React, lodash, or other utility libraries.

// ------------------------------------




// What Parcel do:-
// 1)Build the Dev Build
// 2)Create local server(Host Dev Build on local server)
// 3)it support HMR(hot module replacement) or Hot reloading:-When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!
// 4)file watching algorithm
// 5)it do caching:-it means that during the bundling process, Parcel may have stored copies of certain files in a cache. This is often done to avoid reprocessing files that haven't changed since the last build. When you make changes to your code and trigger a rebuild, Parcel can quickly retrieve the cached files that haven't been modified, reducing the time needed to generate the bundled output.
// 6)Bundeling:-Parcel, as a bundler, has taken the diverse set of files constituting your web application (HTML, CSS, JavaScript, etc.) and bundled them together into a single, optimized package. This bundled file(Bundle) is then typically used for deployment to a web server and serves as the source for rendering your web application in the user's browser.
// 7)Minification:-Minification is a form of optimization. By removing unnecessary characters like whitespace, comments, and sometimes shortening variable and function names, the size of the files is reduced. Smaller file sizes contribute to faster download times and improved overall performance, especially for web applications.
// 8)code spliting:-Parcel is capable of performing code splitting as part of its bundling process. This means that when Parcel bundles your web application, it can intelligently split the code into smaller, more manageable pieces. These pieces can then be loaded asynchronously, which can lead to faster initial page loads and improved user experience.
// 9)Image optimization:-Parcel supports resizing, converting, and optimizing images!
// 10)Error Handeling
// 11)Tree shaking:-Tree shaking is a concept in JavaScript and related frameworks like React that refers to the removal or "shaking off" of unused code during the process of bundling a JavaScript application. The goal is to eliminate dead or unreachable code, reducing the size of the final bundle that is sent to the user's browser. This process is particularly valuable for optimizing the performance of web applications.

// 12)compress:- a)Compression is a form of optimization that goes beyond minification. While minification focuses on removing unnecessary characters and spaces from human-readable code, compression uses algorithms to represent the data in a more compact form, reducing the overall file size.
// b)The goal of this compression is to create more compact files that can be transmitted over the network more efficiently, leading to faster loading times for end-users and improved performance of your web application.
// 13)Diagnostic:-If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
// 14)Differential Bundling



// Note:-the browserlist take array of browsers and it is npm package.
/* it 100% work for last 2 version of firefox and chrome and it might or might not be working for other browser.
"browserslist": [
    "last 2 firefox version",
    "last 2 Chrome version"
  ]*/


