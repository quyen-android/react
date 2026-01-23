import React from "react";

class DisplayInfor extends React.Component{
    // Destructuring array
    
    //pros => properties
    render(){
        const {listUsers} = this.props;
        return(
            <div>
                {listUsers.map((user) => {
                    return(
                        <div key = {user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                        </div>
                    )
            })}
            </div>

            
        )
    }
}

export default DisplayInfor;