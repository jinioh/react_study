
import React, {useState} from 'react';

const hardCalculate = (number: number) => {
    console.log('어려운 계산!');
    for (let i = 0; i < 9999999; i++) {
        return number + 10000;
    }
};

function UseMemoDemo() {
    const [hardNumber, sethardNumber] = useState(1);
    const hardSum:number = hardCalculate[hardNumber];

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onClick={(e) => sethardNumber(parseInt(e.target.value))}/>
            <span> + 10000 = {hardSum}</span>
        </div>
    );
}

export default UseMemoDemo;