import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// import Shoes from './Shoes';

const Shoe = ({ error, shoe, show, handleClose }) => {
    if (!error) {
        return (
            <Modal
                className='modal-container'
                show={show}
                onHide={handleClose}
                size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {shoe.name}
                        </Modal.Title>
                    </Modal.Header>
                    {shoe.image && (
                        <Image fluid src={shoe.image} />
                    )}
                    <Modal.Body>
                        <p>{shoe.manufacturer}</p>
                        <p>
                        Description: {''}{shoe.description ? (
                            shoe.description
                        ) : (
                            <span style={{ fontStyle: 'italic' }}>Not Available</span>
                        )}
                        </p>
                        <p>{shoe.msrp}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                        variant='secondary'
                        onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        );
    } else {
        return (
            <Modal
            size='xl'
            show={show}
            onHide={handleClose}
            className='modal-container'>
                <Modal.Header
                closeButton>Oops!</Modal.Header>
                <Modal.Body>
                    <p>Something went wrong. Please try another image.</p>
                </Modal.Body>
            </Modal>
        );
    }
};

export default Shoe;