import React, { Component } from 'react'
import {
Alert
} from 'react-bootstrap';

export class AlertShow extends Component {
    render() {
        return (
            <div>
                <Alert variant='danger'>
                  OPS ther is an error
                </Alert>
            </div>
        )
    }
}

export default AlertShow
