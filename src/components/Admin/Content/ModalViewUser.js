import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { postUpdateUser } from '../../../services/apiService';
import _ from 'lodash';

const ModalViewUser = (props) => {
    const {show, setShow, viewData} = props;

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setPassword("");
        setRole("USER");
        setUsername("");
        setImage("");
        setPreviewImage("");
        props.resetViewData();
    };

    const handleShow = () => setShow(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("ADMIN");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() =>{
        // console.log('run effect', viewData)
        if(!_.isEmpty(viewData)){
            setEmail(viewData.email);
            setRole(viewData.role);
            setUsername(viewData.username);
            setImage("");
            if(viewData.image){
                setPreviewImage(`data:image/jpeg;base64,${viewData.image}`);
            }
            
        }
    },[viewData])
    return (
        <>
        <Modal 
            size="xl" 
            show={show} 
            onHide={handleClose}
            // backdrop ={'static'}
            className='modal-add-user'
        >
            <Modal.Header closeButton>
            <Modal.Title>User detail</Modal.Title>
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
                            disabled
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <select 
                                className="form-select" 
                                onChange={(event) => setRole(event.target.value)}
                                value={role}
                                disabled
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
                            disabled
                        ></input>
                    </div>
                    <div 
                        className='col-md-12 img-preview'
                    >
                        { previewImage ?
                            <img src={previewImage}/>
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
            </Modal.Footer>
        </Modal>

        </>
    );
}

export default ModalViewUser;
