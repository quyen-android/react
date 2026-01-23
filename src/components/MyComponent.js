// class component
// function component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component{
    //JSX
    myInfor = ['2','b','v']
    render(){
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name='errr' age ={20} mif={this.myInfor}></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;