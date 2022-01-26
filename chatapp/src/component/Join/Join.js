import React, { useState } from 'react'
import "./Join.css";



let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}


const Join = () => {

    const [name, setname] = useState("");

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                
                <h1>Chat App</h1> 
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <a onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button></a>
            </div>
        </div>
    )
}

export default Join
export { user }