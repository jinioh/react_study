import React, {useRef, useEffect} from 'react';

const UseRefDemo3 = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const login = () => {
        alert('안녕')
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default UseRefDemo3;