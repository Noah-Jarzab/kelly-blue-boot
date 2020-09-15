import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// import Shoes from './Shoes';

const Shoe = ({ error, objectDetail, show, handleClose }) => {
    if (!error) {
        return (
            <Modal
                className='modal-container'
                show={show}
                onHide={handleClose}
                size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {objectDetail.shoes.name}
                        </Modal.Title>
                    </Modal.Header>
                    {objectDetail.shoes.image && (
                        <Image fluid src={objectDetail.shoes.image} />
                    )}
                    <Modal.Body>
                        <p>{objectDetail.shoes.manufacturer}</p>
                        <p>
                        Description:{''}{objectDetail.shoes.description ? (
                            objectDetail.shoes.description
                        ) : (
                            <span style={{ fontStyle: 'italic' }}>Not Available</span>
                        )}
                        </p>
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