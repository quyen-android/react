import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component{
    // Destructuring array

    state = {
        isShowListUser : true
    }
    handleShowHide = () =>{
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    //props => properties
    render(){
        const {listUsers} = this.props;
        return(
            <>
                <div className="display-infor-container">
                    {/* <img src={logo}></img> */}
                    <div>
                        <span onClick={(event) => { this.handleShowHide()}}>
                            {this.state.isShowListUser === true? "Hide list user: " : "Show list user: "} 
                        </span>
                    </div>
                    {this.state.isShowListUser &&
                        <div>
                            {listUsers.map((user) => {
                            return(
                                    <div key = {user.id} className={+user.age >18 ?"green":"red"}>
                                        <div>
                                            <hr></hr>
                                            <div>{user.id}</div>
                                            <div>My name's {user.name}</div>
                                            <div>My age's {user.age}</div>
                                        </div>
                                        <div >
                                            <button onClick={() => {this.props.handleDeleteUser(user.id)}}>Delete</button>
                                        </div>
                                    </div>

                            );
                            })}
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default DisplayInfor;