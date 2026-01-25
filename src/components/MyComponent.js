// class component
// function component

import React, { useState } from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
import AddUserInfor from './AddUserInfor';

// class MyComponent extends React.Component{
//     //JSX
//     state = {
//         listUsers: [
//             {id: 1, name: "Quyen", age: "30"},
//             {id: 2, name: "Quyen1", age: "10"},
//             {id: 3, name: "Quyen2", age: "30"}
//         ],
//         ii: "hgas"
//     }
//     handleAddNewUser = (objectUser) => {
//         console.log(objectUser);
//         this.setState({
//             listUsers: [objectUser,...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers : listUsersClone
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <br/>
//                 <AddUserInfor
//                     handleAddNewUser = {this.handleAddNewUser}
                    
//                 />
//                 <br></br>
//                 <DisplayInfor 
//                     listUsers = {this.state.listUsers}
//                     handleDeleteUser = {this.handleDeleteUser}
//                 >
//                 </DisplayInfor>
//             </div>
//         );
//     }
// }

const MyComponent = (props) =>{

    const [listUsers, setListUser] = useState(
        [
            {id: 1, name: "Quyen", age: "30"},
            {id: 2, name: "Quyen1", age: "10"},
            {id: 3, name: "Quyen2", age: "30"}
        ])

    const handleAddNewUser = (objectUser) => {
        setListUser([objectUser,...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers]
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUser(listUsersClone)
    }
    return (
        <div>
            <br/>
            <AddUserInfor
                handleAddNewUser = {handleAddNewUser}

            />
            <br></br>
            <DisplayInfor 
                listUsers = {listUsers}
                handleDeleteUser = {handleDeleteUser}
            >
            </DisplayInfor>
        </div>
    );
}
export default MyComponent;