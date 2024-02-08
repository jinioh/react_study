import {memo} from 'react';

const Child = ({name}) => {
    return(
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>자녀</h3>    
            <p>lastName: {name.lastName}</p>
            <p>firstName: {name.firstName}</p>
        </div>
    );
}

export default memo(Child);