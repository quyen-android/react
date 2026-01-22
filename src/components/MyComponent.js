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
        console.log("random", Math.floor((Math.random()*100)+1)); 

        this.setState({
            name:'Quen',
            age: Math.floor((Math.random()*100)+1)
        })
    }
    handleOnMouseOver(event){
        console.log(event.pageX, event.pageY)
    }

    handleOnChangeInput = (event) =>{
        this.setState({
            name:event.target.value
        })
        // console.log(event.target.value);
    }

    handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return (
            <div>

                My name is {this.state.name} and my age is{this.state.age}
                {/* <button onClick = {(event) =>{this.handleClick(event)}}>click</button> */}
                {/* <button onMouseOver = {(event) => {this.handleOnMouseOver(event)}}>move</button> */}

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type ="text"
                    onChange={(event) => this.handleOnChangeInput(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;