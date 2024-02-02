import { useState } from "react";

function UseStateDemo2() {
    const [names, setNames] = useState(['홍길동', '오세진']);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleUpload = () => {
        setNames((prevState) => {
            return [input, ...prevState]
        })
    }
    
    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange}></input>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
}

export default UseStateDemo2;