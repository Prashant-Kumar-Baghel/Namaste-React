import userContext from "../utils/userContext";
import User from "./User"
import UserClass from "./UserClass";
import React from "react";
// const About=()=>{
//     return(
//         <div className="about">
//             <h1>About Page</h1>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, magni!</p>
//             {/* <User name={"Prashant Baghel(Function)"}/> */}

//             {/*1) Way to use class based component in another component.
//                2)Way to pass the props in class based component */}
//             <UserClass name={"Prashant Kumar(Class)"} location="Mathura"/>
//         </div>
//     )
// }


class About extends React.Component{//we can also write "class About extends Component" as "class About extends React.Component" but for that we have to write import {Component} from "react" instead of import React from "react";.
    constructor(props){
        super(props)
        // console.log("Parent Constructor");
    }

    //Whenever the about component is loaded first of all constructor is called then render method is called and once the class-based component is completely mouted onto DOM then componentDidMount() is called .
    componentDidMount(){
        // console.log("Parent component did mount")
    }

    render(){
        // console.log("Parent render");
        return(
            <div className="about">
             <h1>About classCompoment</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, magni!</p>

             {/* Way to use context inside class based component and basically when we create context then react gives you power of .Consumer as well. we use userContext.Consumer component to access the data. Inside  userContext.Consumer component we have callback function through which we access te data.*/}
             <div>
                <userContext.Consumer>
                    
                    {(data)=>{
                        const {loggedInUser}=data;
                        return <p className="text-bold text-red-500">loggedInUser:- {loggedInUser}</p>//we have to return p from here.
                    }}
                </userContext.Consumer>
             </div>
            {/*1) Way to use class based component in another component.
            2)Way to pass the props in class based component */}           
           <UserClass name={"Child-1"} location="Mathura"/>
           {/* <UserClass name={"child-2"} location="Mathura"/> */}
           
       </div>
        )
    }
}

export default About;

// Note:-Both loading the component or mounting the component are same things.
/*What is the lifecycle of react class based components or we see how the react class-based-component is put-up on webpage or  how the react class-based-component is mounted on webpage?
Ans:- 
{
lifecycle of react class-based component:-
1)constructor()
2)render()
3)componentDidMount()
}
1)When parent is functional component.(here we discussing lifecycle of UserClass)
 Whenever the about page is rendered(or mounted) onto webpage it basically start rendering the JSX and as soon as it see UserClass class-based component then it start to mounting(or loading) the UserClass and as UserClass is load on webpage then instance of UserClass class-based component is created and then constructor is called, once the constructor is called then render is call .

 2)When parent is class-based component.
{ lifecycle process work in parent-child relationship:- 

Parent Constructor
Parent render
child constructor
child render
child component did mount
Parent component did mount }

 When About class-based component is loaded then instance of that About class-based component is created so the constructor of Parent class(About Class) is called then render of Parent class(About Class) is called and as soon as it see UserClass class-based component(Child component) then it start to mounting(or loading) the UserClass(Child component) but Parent component is not yet finish mounting(rendering) and it will go to UserClass(Child component) and it triggered UserClass(Child component) lifecycle, as UserClass(Child component) is load on webpage then instance of UserClass class-based component is created and then constructor of UserClass(Child component) is called, once the constructor is called then render of UserClass(Child component) is call then childern(componentDidMount) will call and once the children component mounted completely then parent(componentDidMount) */

 /*What is the use of componentDidMount()?
 Ans:- componentDidMount() is use to make API calls.*/

 /*Why API calls made inside componentDidMount()?
 Ans:- Same concept is applied here which we were using to make api calls in functional component using useCallback() function.Here react wants quckily render our component once and when the component is rendered then make an api call and wait for data then fill the api data inside the component. we don't want api to return the data to render the component otherwise the component willnot render it keep on waiting for data to come from api.*/

 /*Q:- How does lifecycle works , when we have multiple childrens of same class(or we have two instance of same userClass)?
 Ans:- When we userClass component twice then we creating two different instances of same class.To understand how lifecycle works when we have multiple childrens of same class(or we have two instance of same userClass) we must understand lifecycle diagram .
 let understand the diagram:-
 a)In react component is mounted in two phases(render phase, commit phase) and also react is fast because it has two phases(render phase, commit phase).
 b) When component is mounting, first of all constructor is call then render method is call and these both are in render phase . Then react actually update te DOM and then componentDid Mount() is call and that mounting cycle happen for every child-based component in react
 c) we have output of lifecycle in differnt order because We have two childrens of same class hence react optimize the mounting cycle because react willnot call the componentDidMount of child-1 fist but it will just batch the render phase for these two child so first render phase execute for both childs then commit phase also batch for both child so commit phase execute for both childs .  
 d)react is batching render phase for both child(or multiple childrens) because once the commit phase start react try to update the DOM and DOM Manupilation is the most expensive when we try to updating the component. When we loading the component,DOM manupilatio is very expensive because it takes a lot of time. When react is rendering in render phase basically react triggered the reconcilliation process(i.e find out the diff between virtual DOMS ) and everything in render phase is happening inside virtual DOM's. when react try to update the Actual DOM in commit phase then react findout all the childrens, batched the render phase because render phase is very fast then commit phase is happen.

 { lifecycle process when two childrens(or multiple childrens) of same class:- 

Parent Constructor
Parent render

child-1 constructor
child-1 render

child-2 constructor 
child-2 render

<DOM UPDATE - IN SINGLE BATCH>

child-1 component did mount
child-2 component did mount

Parent component did mount
 }
 */





