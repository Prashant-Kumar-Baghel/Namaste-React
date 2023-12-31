import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);//we can create state variable in custom hook like normal component.
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async ()=>{
        const data= await fetch(MENU_API+resId);
        const json= await data.json();
        setResInfo(json.data);
        console.log(json);

    }
    return resInfo;
}

export default useRestaurantMenu;
// Note:-1)Linting is the process of checking the source code for Programmatic as well as Stylistic errors. This is most helpful in identifying some common and uncommon mistakes that are made during coding.
// 2)A Lint or a Linter is a program that supports linting (verifying code quality). They are available for most languages like JavaScript, CSS, HTML, Python, etc..
