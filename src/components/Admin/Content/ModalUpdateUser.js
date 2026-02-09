import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import ModalShowPreview from "./ModalShowPreview";
import { toast } from "react-toastify";
import { postUpdateUser } from '../../../services/apiService';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const {show, setShow, dataUpdate,currentPage} = props;

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setPassword("");
        setRole("USER");
        setUsername("");
        setImage("");
        setPreviewImage("");
        props.resetUpdateData();
    };

    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("ADMIN");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() =>{
        // console.log('run effect', dataUpdate)
        if(!_.isEmpty(dataUpdate)){
            setEmail(dataUpdate.email);
            setRole(dataUpdate.role);
            setUsername(dataUpdate.username);
            setImage("");
            if(dataUpdate.image){
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
            
        }
    },[dataUpdate])
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handSubmitCreateUser = async() =>{
        const isValidEmail = validateEmail(email);

        if(!isValidEmail){
            toast.error("Invalid email")
            return;
        }

        let data = await postUpdateUser(dataUpdate.id,username, role, image);
        if(data && data.EC === 0){
            toast.success(data.EM);
            handleClose();
            //props.setCurrentPage(1);
            await props.fetchListUsersWithPaginate(currentPage);
        }else{
            toast.error(data.EM)
        }
    }

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
       }else
       {

       }
    }
    // console.log('Check dataupdate:', props.dataUpdate)

    return (
        <>
        <Modal 
            size="xl" 
            show={show} 
            onHide={handleClose}
            backdrop ={'static'}
            className='modal-add-user'
        >
            <Modal.Header closeButton>
            <Modal.Title>update user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label  className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email}
                            disabled
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password}
                            disabled
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select 
                                className="form-select" 
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                        >
                        <option >USER</option>
                        <option >ADMIN</option>
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label label-upload" htmlFor='labelUpload'>
                            <FcPlus />Upload File Image
                        </label>
                        <input 
                            type='file' 
                            id='labelUpload' 
                            hidden
                            onChange={(event) => handleUploadImage(event)}></input>
                    </div>
                    <div 
                        className='col-md-12 img-preview'
                    >
                        { previewImage ?
                            <img src={previewImage}
                            />
                            
                        :
                            <span>preview image</span>
                        }
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handSubmitCreateUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

        </>
    );
}

export default ModalUpdateUser;
