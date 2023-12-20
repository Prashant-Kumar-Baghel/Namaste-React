import React from "react";//import Recat for React.Component .
/* 1)extends React.Component will make react know this is a class based Component.
2)extends React.Component will make a normal class to Component.*/

// In class based components, we have render method and return some piece of jsx which will be display onto UI.

/*What is React.Component?
Ans:- React.Component is a class which is given by react(react package) and UserClass is inherit some properties from React.Component. */
// Note:- we have UserClass(javascript class) and we extend it from React.Component and React.Component comes from react library.

class UserClass extends React.Component{
    //In class based component, We have constructor and that constructor recieve the props.
    /*Note:- whenever the instance of that class is created then constructor is called and that props is extracted over here and now we can use that props anywhere in class using this.props(lways use super(props); also) */
    constructor(props){
        // Always use super(props); inside constructor.
        super(props);
        //state is created when class instance is created.
        /*Q-When we say rendering a function, What do you mean by rendering a function?
        Ans:- it mean On your Webpage if there is functional component it load and that mean you are mounting that fucntion it is like you calling(involking) that function.*/
        /*Q-What is the mean of creating instance of class-based component?
        Ans:-loading a class based component mean you are creating instance of a class and giving it some props,so whenever you create instance of class then the constructor is called and this is the best place to recieve props , also create state variables.*/

        //way to create state variable in class based components ,we create state variables using this.state and that state variable is big object which contain all state variables for us.

        //In functional components ,BTS react create an big object and put all state variables inside that object.
        this.state={
           /* current:0,//1st state variable.
            current1:10//2nd state variable*/

            //create state variabe userInfo with some default values.we use userInfo state variable to update json data onto our webpage.
            userInfo:{
                name:"Rajash",
                location:"Chandigarh"
            }
        }
        // console.log(this.props.name+"child constructor");
    }
    

    //Whenever the component is loaded first of all constructor is called then render method is called and once the class-based component is completely mouted onto DOM then componentDidMount() is called .
    //We make componentDidMount function as async function 
    async componentDidMount(){

        //Way to make api call.
        const data= await fetch("https://api.github.com/users/Prashant-Kumar-Baghel")
        const json= await data.json();//we convert data into json.
        console.log(json);

        this.setState({
            userInfo:json
        })

        // console.log(this.props.name+"child component did mount")
    }

//componentDidUpdate
    componentDidUpdate(){
        console.log("componentDidMount")
    }

    //componentWillUnmount :- this component is called just before the component unmounting.
    /*what is unmounting?
    Ans:- unmounting mean when the component is disappear from html whereas mounting mean showing on UI.*/
    /*Note:- componentWillUnmount is call just before when component is gone from the page.
    Q:- When will the component is gone from the page?
    Ans:- component is gone from the page when we go to new page like when we navigate from about-us page to contact-us page.*/
    componentWillUnmount(){

    }


    render(){
        // const {name,location}= this.props;//destructuring.
        // const {current, current1}=this.state;
        // console.log(this.props.name+"child render");
        const {name,location,id,login,avatar_url}=this.state.userInfo;

        // debugger;(To check that our page is rendered with dummy data we can use debugger and to know how to use it we can check in video at 1:45:16 )
        return (
            <div className="user-card">
                {/* Way to use state variable. */}
                {/* <h1>Count:{current}</h1>
                <h1>Count:{current1}</h1> */}
                {/* Now see How we can update state variables in class based components? */}
                <button className="class-btn" onClick={()=>{
                    // this.state.current+=1; //Never Update state variables Directly inside class based components.
                    // We use this.setState to update state variables,we can use that this.setState anywhere inside the class and In this.setState we pass the object which contain updated value of state variables.
                    //when current state variable is changed then react re-render the whole class based element.

                    /*Q-How the BTS this update state variables in class based components process work?
                    Ans:-1)When button clicked then react take object present inside this.setState() and update the value of state variables present inside this.state by whatever state variables is passed from this.setState() even it doesnot update others state variables present inside this.state. i.e if we have five different state variables present inside this.state but if you are sending only two state variable for update inside this.setState then those only two state variables will update inside this.state.
                    2) Basically When button clicked then react will retriggered the reconciliation process i.e it will find diff of the objects then re-renders the components and update the ui.*/
                    /*this.setState({
                        current:current+1,//(current:this.state.current+1) we can also write like this.
                        current1:current1+1
                    })*/
                }}>IncreaseCount</button>
                {/*Always use this keyword in your class and in this way we use our props.*/}
                <img src={avatar_url} alt="" style={{width:"20%",height:"30vh"}}/>
                {/* we didnot get anything for name and location on UI because we get these information as NULL from API. */}
                <h2>Name:{name}</h2>
                <h3>Address:{location}</h3>
                <h4>Contact No:9876541110</h4>
                <h5>Id:{id}</h5>
                <h5>LOGIN:{login}</h5>
            </div>
        )
    }
}

export default UserClass;//Way to export class based component



/*Note:-1)There is only one reason when one needs to pass props to super() When you want to access this.props in constructor.
      2)passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.
      3)super(props) would call the React.Component constructor passing in props as the argument.*/
      
/*Note:-When implementing the constructor() function inside a React component, super() is a requirement. Keep in mind that your MyComponent component is extending or borrowing functionality from the React.Component base class.
This base class has a constructor() function of its own that has some code inside of it, to setup our React component for us.
When we define a constructor() function inside our MyComponent class, we are essentially, overriding or replacing the constructor() function that is inside the React.Component class, but we still need to ensure that all the setup code inside of this constructor() function still gets called.
So to ensure that the React.Component’s constructor() function gets called, we call super(props). super(props) is a reference to the parents constructor() function, that’s all it is.We have to add super(props) every single time we define a constructor() function inside a class-based component.    */  


/*Q-constructor(props) {
    super();
    console.log(this.props) //undefined
}
why we get this.props as undefined?
When you call super() without passing props, it doesn't properly set up the this.props object. This is because this.props is part of the setup provided by the React.Component class.*/


/*is <UserClass /> is instance of the UserClass class?
When you use <UserClass /> in your JSX code, you are creating an instance of the UserClass class.*/

/*What is the use of this keyword?
Inside the constructor, this refers to the specific instance of the class that is being created. It allows you to work with the instance-specific properties and methods.*/

/*Q-Without passing super(props) this.props is not render in constructor but how is it rendering inside the render method?
The behavior you're observing is related to how the React lifecycle works.

constructor vs. render:

The constructor is a special method that is called when an instance of a component is being created.
The render method, on the other hand, is called when React wants to render the component.
Initialization in Constructor:

In the constructor, you perform setup tasks, including initializing state and binding methods. However, this.props is not fully available until after super(props) is called. If you access this.props before super(props), it might be undefined.
Rendering in render Method:

The render method is called later in the component lifecycle when React is ready to display the component.
By the time render is called, the component has gone through its setup, and this.props is available and correctly set up, even if super(props) wasn't explicitly called in the constructor.

In summary, while it might appear that this.props is accessible in the render method without explicitly calling super(props) in the constructor, it's due to the later stage in the component lifecycle when render is called. It's still recommended to call super(props) in the constructor to ensure proper setup and avoid unexpected issues in more complex components.*/

/*Q:-Now we see How whole lifecycle work?
Ans:- As soon as UserClass component is loaded , react call the constructor and then in constructor state variables are intialize with their default values and after that render method is call and state variables has default values hence render happens with the defalt values and  component render onto webpage with default values that mean In Commit Phase , react update the DOM with Dummy data. after that componentDidMount will call and api call is made also setState is called and when setstate is called the updating cycle begin and mounting cycle is finished so mounting cycle is finished when component is rendered once(component is initially render with some dummy data or by shimmer UI). Now when setstate is called then setState update the state variable and when state variable is updated then react trigerred the render method once again but this time state variable has been changed with the updated value.now in updaing cycle , react updating the DOM(i.e react calculate the Diff then update the actual dom with new value in commit phase. so now image,name,loction everything will updated onto webpage with new value) after that componentDidUpdate() is called thatshow updating cycle work. */

/*
This is how whole lifecycle methods works for any class-based component or userClass class-based component.:-
-------Mounting Cycle----------
1)construnctor(dummy data)
2)render method(dummy data)
3)<HTML Dummy Data>(i.e HTML has dummy data for few seconds)
4)componentDidMount 
       <API call>  
       <this.setState>

-----Update Cycle---------
5)render method(render method happened with API data)
6)<HTML nwe API data>(Actual DOM is updated and at this point user will see things like name,image etc )
7)componentDidUpdate
 



*/
