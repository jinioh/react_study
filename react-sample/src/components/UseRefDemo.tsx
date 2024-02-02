import React, {useState, useEffect, useReducer, useRef} from "react";

function UseRefDemo() {
   const [count, setCount] = useState(0);
   const countRef = useRef(0);

   const increaseCountState = () => {
    setCount(count + 1)
   };

   const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current)
   }
    
    return (
        <div>
            <span>count: {count}</span>
            <span>Ref: {countRef.current}</span>
            <button onClick={increaseCountState}>State 업</button>
            <button onClick={increaseCountRef}>Ref 업</button>
        </div>
    )
}

export default UseRefDemo;