import React, {useEffect, useMemo, useState} from 'react';

function UseMemoDetmo2() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo(() => {
        return {
            country: isKorea? '한국' : '외국',
        };
    }, [isKorea]);

    return (
        <div>
            <h2>하루 몇끼?</h2>
            <input type='number' value={number} onChange={(e) => {
                setNumber(e.target.value)
            }}/>
            <hr />
            <h2>어느 나라?</h2>
            <p>나라: {location.contry}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 고</button>
        </div>
    );
}

export default UseMemoDetmo2;