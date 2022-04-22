import React from 'react';
import { Modal } from 'react-bootstrap';


const AdminModal = () => {
  return (
    <Modal show={ true }>
        <Modal.Header>
            <h2>This is Modal</h2>
        </Modal.Header>
        <Modal.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolor. Quasi sunt exercitationem tempora sapiente at aspernatur, quas quibusdam in quam sint autem amet atque officia delectus ipsa numquam deserunt!</p>
        </Modal.Body>
    </Modal>
  )
};

export default AdminModal;