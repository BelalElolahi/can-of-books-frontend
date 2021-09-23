import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Profile extends Component {
    render() {
        return (
            <div class="col-3">
                <Card>
                    <Card.Img variant="top" src={this.props.picture} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.email}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">User Profile</small>
                    </Card.Footer>
                </Card>

            </div>
        )
    }
}
export default Profile;

