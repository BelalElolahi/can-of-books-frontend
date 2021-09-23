import React, { Component } from 'react'
import { Container,Navbar} from 'react-bootstrap'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/">Home</Navbar.Brand>
                            <Navbar.Brand href="./UserProfile">Profile</Navbar.Brand>
                            <Navbar.Brand href="#">
                            <LogoutButton />
                            </Navbar.Brand>
                            <Navbar.Brand href="#">
                            <LoginButton />
                            </Navbar.Brand>
                         </Container>
                    </Navbar>
                </Container>
              
            </div>
        )
    }
}

export default Header
