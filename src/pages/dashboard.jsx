import {useState} from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userData,setUserData] = useState("");
    function displaydata(){
        setUserData(location.state);
        console.log(userData)
    } 
    return (  
        <>
        <button onclick= {displaydata}>Button</button>
        </>
    );
}

export default Dashboard;