import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Error extends React.Component{

    render(){

        return(
        <Modal show={this.props.show} >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>'Invalid City'</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        )
    }
}

export default Error;