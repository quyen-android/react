import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component{
//     // Destructuring array

//     constructor(props){
//         super(props);
//         console.log('call me constructor: 1')
//         this.state = {
//             isShowListUser : true
//         }
//     }
//     handleShowHide = () =>{
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     componentDidMount(){
//         console.log('call me component did mount');
//         setTimeout(() => {
//             document.title = 'Eric & Quyen dep trai'
//         },3000);
//     }

//     componentDidUpdate(prevProps, prevState){
//         console.log('call me component did update',this.props, prevProps);
//         if(this.props.listUsers !== prevProps.listUsers){
//             if(this.props.listUsers.length === 5){
//                 alert('me')
//             }
//         }
//     }
//     //props => properties
//     render(){
//         console.log('>>> call me render')
//         const {listUsers} = this.props;
//         return(
//             <>
//                 <div className="display-infor-container">
//                     {/* <img src={logo}></img> */}
//                     <div>
//                         <span onClick={(event) => { this.handleShowHide()}}>
//                             {this.state.isShowListUser === true? "Hide list user: " : "Show list user: "} 
//                         </span>
//                     </div>
//                     {this.state.isShowListUser &&
//                         <div>
//                             {listUsers.map((user) => {
//                             return(
//                                     <div key = {user.id} className={+user.age >18 ?"green":"red"}>
//                                         <div>
//                                             <hr></hr>
//                                             <div>{user.id}</div>
//                                             <div>My name's {user.name}</div>
//                                             <div>My age's {user.age}</div>
//                                         </div>
//                                         <div >
//                                             <button onClick={() => {this.props.handleDeleteUser(user.id)}}>Delete</button>
//                                         </div>
//                                     </div>

//                             );
//                             })}
//                         </div>
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const {listUsers} = props;

    const [isShowListUser, setShowHiddeListUser] = useState(true);

    // this.state = {
    //     isShowListUser: true
    // }
    const handleShowHideListUser = () =>{
        setShowHiddeListUser(!isShowListUser)
    }
        return(
            <div className="display-infor-container">
                {/* <img src={logo}></img> */}
                <div>
                    <span onClick={() => handleShowHideListUser()}> 
                        Show list user 
                    </span>
                </div>
                {isShowListUser &&
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
                                        <button onClick={() => {props.handleDeleteUser(user.id)}}>Delete</button>
                                    </div>
                                </div>

                        );
                        })}
                    </div>
                }
            </div>
        )
    }

export default DisplayInfor;