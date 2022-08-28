import React from 'react';

const ButtonCallback = (props) =>{
    console.log('Button-callback render');
    return(
        <button onClick={props.setPropCount}>Increment Count</button>
    )
}

export default React.memo(ButtonCallback);