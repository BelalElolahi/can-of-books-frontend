import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class BestBooks extends Component {
    render() {
        return (
            <div className="col-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.descriptions}
                        </Card.Text>
                        {this.props.email}
                    </Card.Body>
                </Card>

                
            </div>
        )
    }
}

export default BestBooks;
