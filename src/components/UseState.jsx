import React, {useState,useEffect,useRef} from 'react';
 import './usestate.css';
let arr  = [
  "I am Shashi",
  "I am a FrontEnd Developer",
  "I am a content creator"
];
function UseState() {
// let i=1;
 let [i,setI] = useState(0);
let inputRef = useRef();

 console.log(inputRef.current);

 useEffect(()=>{
   let timer = setInterval(()=>{
         if(i===3) setI(i=0);
         setI(i++);
   },5000)
  return () => clearInterval(timer);
},[])

  let  item = [...arr[i]].map((c,index) =>
 {
  let styles ={ animationDelay: (0.5 + index/10)+'s',} 
return <span 
 key={index}
  area-hidden="true"
 className='chars'
 style={styles} 
 >{c}</span>
 }
 );
 console.log(typeof item);
return (
        <div>
            <h1 >Hii welcome to usestate Component!!</h1>
            <h1  style ={{color:"#C0C0C0"}}>Who Am I? </h1>
             <h1 ref={inputRef} className='h1chars'>
               {item}
             </h1>
        </div>
    )
}

export default UseState
