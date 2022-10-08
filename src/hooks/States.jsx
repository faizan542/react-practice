import React, { useState } from 'react';


function States() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
        if(count === 0){
            setCount(count)
        }
    }

    return (
        <div style={{ textAlign: "center", backgroundColor: "lightblue", marginTop: "10px", marginBottom: "10px" }}>
            <h3>State Practice</h3>
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>&nbsp;
            <button onClick={increase}>+</button>
        </div>
    )
}

export default States