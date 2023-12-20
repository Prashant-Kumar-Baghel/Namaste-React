import { useState } from "react";

const User=(props)=>{
    const [current]=useState(0);
    const [current1]=useState(10);
    return (
        <div className="user-card">
            <h1>Count:{current}</h1>
            <h1>Count:{current1}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Address:Mathura</h3>
            <h4>Contact No:9876541110</h4>
        </div>
    )
}
export default User;