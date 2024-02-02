import React, {useState, useEffect, useReducer, useRef} from "react";

function UseRefDemo2() {
   const [count, setCount] = useState(0);
   const countRef = useRef(0);

   useEffect(() => {
    countRef.current = countRef.current + 1;
    console.log('랜더링 수 ', countRef.current);
   });

    return (
        <div>
            <span>count: {count}</span>
            <button onClick={() => setCount(count + 1)}>State 업</button>
        </div>
    )
}

export default UseRefDemo2;