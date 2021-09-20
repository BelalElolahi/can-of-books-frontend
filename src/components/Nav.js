import React, { Component } from 'react'
//import {Link} from "react-router-dom"

export class Nav extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/">Home</Navbar.Brand>
                            <Navbar.Brand href="/BestBooks">Navbar</Navbar.Brand>
                            <Navbar.Brand href="#">About</Navbar.Brand>
                            <Navbar.Brand href="#">Contact US</Navbar.Brand>

                             {/*<Link> </Link>
                             <Link> </Link>
                             <Link> </Link>*/}

                         </Container>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default Nav;
