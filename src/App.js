import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

export class App extends Component {
    render() {
        return (
            <div>
                <Footer/>
                <Header/>
               <Main /> 
            </div>
        )
    }
}

export default App
