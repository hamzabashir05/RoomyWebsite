import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function CallusModal(props) {
  

  return (
   
    <Modal  size="md" {...props} aria-labelledby="contained-modal-title-vcenter">
  
    <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Open Pick an APP ?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>https://roomy.pk wants to open this application.</p>
  
          <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox"  />
      </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Open Pick An App</Button>
          <Button variant="primary">Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
  </Modal>

    );
}
