import React, {useState} from 'react';


function States() {
    var count = 0;

  return (
    <div style={{textAlign: "center", backgroundColor:"lightblue", marginTop:"10px", marginBottom:"10px"}}>
        <h1>{count}</h1>
        <button>+</button>
    </div>
  )
}

export default States