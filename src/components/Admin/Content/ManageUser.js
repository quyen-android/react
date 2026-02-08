import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUser } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser"

const ManageUser = (props) =>{

    const [showModalCreateUser,setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser,setShowModalUpdateUser] = useState(false);
    const [showModalViewUser,setShowModalViewUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [viewData, setViewData] = useState({});
    const [showModalDeleteUser,setShowModalDeleteUser] = useState(false);
    const [listUsers, setListUsers] = useState([]); 
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() =>{
        fetchListUsers();
    },[]);

    const fetchListUsers = async() =>{
        let res = await getAllUser();

        if(res.EC === 0){
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdateUser = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleShowViewUser = (user) =>{
        setShowModalViewUser(true);
        console.log(user);
        setViewData(user);
    }

    const handleClickBtnDeleteUser = (user) =>{
        setShowModalDeleteUser(true);
        // console.log(user)
        setDataDelete(user)
    }
    const resetUpdateData = () =>{
        setDataUpdate({});
    }

    const resetViewData = () =>{
        setViewData({});
    }
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
                    <TableUser 
                        listUsers = {listUsers}
                        handleClickBtnUpdateUser = {handleClickBtnUpdateUser}
                        handleShowViewUser = {handleShowViewUser}
                        handleClickBtnDeleteUser = {handleClickBtnDeleteUser}
                    />
                </div>
                <ModalCreateUser 
                    show = {showModalCreateUser}
                    setShow = {setShowModalCreateUser}
                    fetchListUsers = {fetchListUsers}
                />
                <ModalUpdateUser 
                    show = {showModalUpdateUser}
                    setShow = {setShowModalUpdateUser}
                    dataUpdate = {dataUpdate}
                    fetchListUsers = {fetchListUsers}
                    resetUpdateData = {resetUpdateData}
                    getAllUser
                />
                <ModalViewUser
                    show = {showModalViewUser}
                    setShow = {setShowModalViewUser}
                    fetchListUsers = {fetchListUsers}
                    viewData = {viewData}
                    resetViewData = {resetViewData}
                />
                <ModalDeleteUser
                    show = {showModalDeleteUser}
                    setShow = {setShowModalDeleteUser}
                    dataDelete = {dataDelete}
                />
            </div>
        </div>
    )
}

export default ManageUser;