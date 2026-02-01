import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";

const ManageUser = (props) =>{
    const [showModalCreateUser,setShowModalCreateUser] = useState(false);

    return(
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus/>Add new user</button>
                </div>
                <div className="table-users-container">
                        table users
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow = {setShowModalCreateUser}
                />
            </div>
        </div>
    )
}

export default ManageUser;