// class component
// function component

import React from 'react';

class MyComponent extends React.Component{
    //JSX

    state = {
        name: 'Quyen',
        address: 'Quyen dep trai',
        age: 22
    };

    render(){
        return (
            <div>

                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;