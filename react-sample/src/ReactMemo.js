import {useState} from 'react';
import Child from './Child';

function ReactMemo() {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    }

    const name = useMemo(() => {
        return {
            lastName: '홍',
            firstName: '길동',
        };
    }, []);

    return(
        <div style={{border: '2px solid navy', padding: '10px'}}>
            <h1>부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            <Child name={name} />
        </div>
    );
}

export default ReactMemo;