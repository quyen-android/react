// class component
// function component

import React from 'react';

class MyComponent extends React.Component{
    //JSX
    render(){
        return (
            <div>my first component

                {Math.random(0,1)}
            </div>
        );
    }
}

export default MyComponent;