
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";
import FormNewOwner from './FormNewOwner';

const RegisterOwner = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <ReactBootStrap.Button className="primary" onClick={handleShow}>
                Nuevo Dueño
            </ReactBootStrap.Button>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Dueño</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormNewOwner />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default RegisterOwner





