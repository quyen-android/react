// class component
// function component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';

class MyComponent extends React.Component{
    //JSX
    state = {
        listUsers: [
            {id: 1, name: "Quyen", age: "30"},
            {id: 2, name: "Quyen1", age: "10"},
            {id: 3, name: "Quyen2", age: "30"}
        ],
        ii: "hgas"
    }
    handleAddNewUser = (objectUser) => {
        console.log(objectUser);
        this.setState({
            listUsers: [objectUser,...this.state.listUsers]
        })
    }
    render(){
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser = {this.handleAddNewUser}>
                </AddUserInfor>
                <br></br>
                <DisplayInfor 
                    listUsers = {this.state.listUsers}
                    
                >
                </DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;