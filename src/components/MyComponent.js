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

    handleClick (event){
        console.log(">>>click me my button"); 
        console.log("My name is", this.state.name); 
    }
    handleOnMouseOver(event){
        console.log(event.pageX)
    }
    render(){
        return (
            <div>

                My name is {this.state.name}
                <button onClick={this.handleClick}>click</button>
                <button onMouseOver = {(event) => {this.handleOnMouseOver(event)}}>move</button>
            </div>
        );
    }
}

export default MyComponent;