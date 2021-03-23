import React, { useState,useEffect } from "react";

function Aboutme() {
    let [i, setI] = useState(0);
    let arr  = [
      "I am Shashi",
      "I am a FrontEnd Developer",
      "I am a content creator"
    ];
    useEffect(() => {
  let id = setInterval(() => {
        if(i===2) setI(0);
        else setI(i+1);
      }, 4000);
      return () => clearInterval(id);
    });
    return (
          <h1>{arr[i]} </h1>
    )
}

export default Aboutme
