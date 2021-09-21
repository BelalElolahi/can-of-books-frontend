import React, { Component } from 'react'
import { Card , Button } from 'react-bootstrap';

class BestBooks extends Component {


    render() {
        return (
            <div className="col-4">
                <Card style={{ width: '18rem' }}>
                   {/* <Card.Img variant="top" src="holder.js/100px180" />*/}
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.descriptions}
                        </Card.Text>
                        User  : {this.props.email}
                    </Card.Body>
                    <Button variant="danger" type="submit" onClick={()=>this.props.handelDelete(this.props.bookId)} >
                       Delete
                    </Button>
                    <Button variant="danger" type="submit" onClick={()=>this.props.handelUpdate(
                        this.props.bookId 
                        ,this.props.title
                        ,this.props.descriptions
                        ,this.props.status
                        ,this.props.email
                        )}
                         >
                       update
                    </Button>
                    
                </Card>

                
            </div>
        )
    }
}

export default BestBooks;
