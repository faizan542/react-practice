import React from 'react'

function Time() {
    const date = new Date();
    const currentTime = date.getHours();
    let greeting;
    let styling;
    if(currentTime < 12){
        greeting = "Good Morning";
         styling={
            color : "blue"
        }
    }else if(currentTime < 18 ){
        greeting = "Good Afternoon";
         styling={
            color : "orange"
        }
    }else{
        greeting = "Good Night";
         styling={
            color : "red"
        }
    }
  return (
    <div>
        <h1 style={styling}>{greeting}</h1>
    </div>
  )
}

export default Time