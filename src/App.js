import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { withAuth0 } from '@auth0/auth0-react';

export class App extends Component {
    render() {
       
        return (
            <div>
                {
                         console.log(this.props.auth0)

                        
                }
                <Header/>
                {
                   
                    this.props.auth0.isAuthenticated ?
                        <> 
                          <Main UserEmail={this.props.auth0.user.email} name={this.props.auth0.user.name} 
                           picture={this.props.auth0.user.picture}/>  
                        </> :
                        ""
                      
                }
            <Footer />

            </div>
        )
    }
}

export default withAuth0(App);
