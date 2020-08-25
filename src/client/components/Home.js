import React from "react";

const Home = () => {
    return (
    <div>
         <div>Hello from server-side</div>
         <button onClick={()=> console.log("hey")}>Press Me</button>
    </div>
   
    )
}

export default Home;