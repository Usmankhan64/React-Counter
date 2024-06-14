import React, { useState } from "react";
const count = () => {
    
    const [counter,setcounter] =useState(0)
    return (
    
        <div>
            <h1>{counter}</h1>
            <div>
                <button>Decrease</button>
                <button>Rest</button>
                <button>increase</button>
            </div>
        </div>
        
    



)

}
export default count