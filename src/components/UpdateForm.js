import React, { Component } from 'react'
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap'


export class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true

        };
    }


    handleShow = () => {
        this.setState({
            show: true

        });
    };
   

    render() {

        return (
            <div>
                {

                    <>
                        

                        <Modal show={this.state.show} onHide={this.props.handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={this.props.handelUpdateForm}>
                                    <Form.Group className="mb-3" controlId="bookTilte">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" value={this.props.title} onChange={this.props.handelTitel} required name="title" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="bookDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" value={this.props.descriptions} onChange={this.props.handelDescription} required name="description" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="bookStatus">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select defaultValue={this.props.status} onChange={this.props.handelstatus} required name="status" >
                                            <option>Available</option>
                                            <option>Unavailable</option>

                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="secondary" onClick={this.props.handleClose} >Close</Button>
                                    <Button variant="primary" type="submit"  >
                                        Save changes
                                    </Button>
                                </Form>
                            </Modal.Body>
                            {/*<Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>*/}
                        </Modal>
                    </>


                }









            </div>
        )
    }
}

export default UpdateForm
