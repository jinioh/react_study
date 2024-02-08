
import React, {useMemo, useState} from 'react';

const hardCalculate = (number: number) => {
    console.log('어려운 계산!');
    for (let i = 0; i < 9999999; i++) {
        return number + 10000;
    }
};

const easyCalculate = (number: number) => {
    console.log('쉬운 계산!');
        return number + 1;
};

function UseMemoDemo() {
    const [hardNumber, sethardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);
    
    const easySum:number = easyCalculate[easyNumber];

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} 
            onClick={(e) => sethardNumber(parseInt(e.target.value))}/>
            <span> + 10000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input type="number" value={hardNumber} 
            onClick={(e) => setEasyNumber(parseInt(e.target.value))}/>
            <span> + 1 = {easySum}</span>
        </div>
    );
}

export default UseMemoDemo;