import React, { useState } from "react";

// class AddUserInfor extends React.Component{
//     state = {
//         name: '',
//         address: 'Quyen dep trai',
//         age: 22
//     };

//     handleOnChangeInput = (event) =>{
//         this.setState({
//             name:event.target.value
//         })
//         console.log(event, event.target.value);
//     }
//     handleOnChangeAge = (event) =>{
//         this.setState({
//             age:event.target.value
//         })
//         console.log(event, event.target.value);
//     }

//     handleOnSubmit = (event) =>{
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random()*100) + 1) + 'random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render(){
//         return(
//             <div>
//                 {/* My name is {this.state.name} and my age is{this.state.age} */}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name:</label>
//                     <input
//                         value={this.state.name} 
//                         type ="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}>
//                     </input>

//                     <label>Your age</label>
//                     <input
//                         value = {this.state.age}
//                         type = "numbers"
//                         onChange = {(event) => this.handleOnChangeAge(event)}>
//                     </input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {
 
    const [name, setName] = useState('cvgdf');
    const [address, setAddress] = useState('Quyen dep trai');
    const [age, setAge] = useState(22);

    const handleOnChangeName = (event) =>{
        setName(event.target.value)
    }

    const handleOnChangeAddress = (event) =>{
        setAddress(event.target.value)
    }

    const handleOnChangeAge = (event) =>{
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random()*100) + 1) + 'random',
            name:name,
            age: age
        });
    }

    return(
        <div>
            My name is {name} and my age is{age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    value={name} 
                    type ="text"
                    onChange={(event) => handleOnChangeName(event)}>
                </input>

                <label>Your age</label>
                <input
                    value = {age}
                    type = "numbers"
                    onChange = {(event) => handleOnChangeAge(event)}>
                </input>
                <button>Submit</button>
            </form>
        </div> 
    )
}
export default AddUserInfor;