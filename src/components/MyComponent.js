// class component
// function component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component{
    //JSX
    state = {
        listUsers: [
            {id: 1, name: "Quyen", age: "30"},
            {id: 2, name: "Quyen1", xage: "30"},
            {id: 3, name: "Quyen2", age: "30"}
        ],
        ii: "hgas"
    }
    render(){
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                
                <DisplayInfor listUsers = {this.state.listUsers}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;