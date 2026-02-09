import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from "react-toastify";

const ModalDeleteUser = (props) =>{
  const {show, setShow,dataDelete} = props

  const handleClose = () => setShow(false);
  const handleSubmitDelete = async () => {
    let data = await deleteUser(dataDelete.id);
    if(data && data.EC === 0){
        toast.success(data.EM);
        handleClose();
        props.setCurrentPage(1);
        await props.fetchListUsersWithPaginate(1);
    }else{
        toast.error(data.EM)
    }
  }

  
  // console.log(dataDelete)
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"

        >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this use. email 
          <b>
            {dataDelete && dataDelete.email ? dataDelete.email : ""}
          </b> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleSubmitDelete()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;