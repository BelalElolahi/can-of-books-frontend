import React, { Component } from 'react';
import {
    Form,
    Button,
} from 'react-bootstrap';




export class bookForm extends Component {
    render() {
        return (
            <div class="col-3">
                <Form onSubmit={this.props.handelSubmit}>
                            <Form.Group className="mb-3" controlId="bookTilte">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" onChange={this.props.handelTitel} required name="title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bookDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" onChange={this.props.handelDescription} name="description" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bookStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select onChange={this.props.handelstatus} required name="status">
                                    <option>Available</option>
                                    <option>Unavailable</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Create Book
                            </Button>
                        </Form>



            </div>
        )
    }
}

export default bookForm
