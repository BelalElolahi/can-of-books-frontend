import React, { Component } from 'react';
//import FormBook from './bookForm';
import axios from 'axios';
import BestBooks from './BestBooks';
import AlertShow from './AlertShow';
import {
    Form,
    Button
} from 'react-bootstrap';
/*import {
    BrowserRouter as Router ,
    Route,
    Switch

} from 'react-router-dom';*/

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            email: "BilalE@gmail.com",
            showBooks: false,
            title: '',
            descriptions: '',
            status: ''

        };
    }


    componentDidMount() {
        axios.get(`http://${process.env.REACT_APP_BAKEND_URL}/`)
            .then(res => {

                console.log(res.data)
                this.setState({
                    data: res.data,
                    showBooks: true
                });

                console.log(this.state.data);


            }).catch(err => {
                console.log(err);
                this.setState({
                    showBooks: false
                });

            });
    }
    handelTitel=(e)=>{
         
        this.setState({
           title:e.target.value
        });
        console.log(this.state.title);
    }
    handelDescription=(e)=>{
        this.setState({
            descriptions:e.target.value
         });
    }
    
    handelstatus=(e)=>{
        this.setState({
            status:e.target.value
         });
         console.log(this.state.title);
         console.log(this.state.email);

    }

    handelSubmit =(e)=> {
        e.preventDefault();

        let config = {
            method: "POST",
            baseURL: `http://${process.env.REACT_APP_BAKEND_URL}`,
            url: "/create-book",
            data: {
                title: this.state.title,
                descriptions: this.state.descriptions,
                status: this.state.status,
                email: this.state.email
            }
            
        }
        axios(config).then(response =>{
             console.log(response.data);
             this.setState({
                data:response.data
            });

            console.log(this.state.data); 
             
        })
    }

    handelDelete=(id)=>{
        let  bookId=id;
        let config = {
            method: "DELETE",
            baseURL: `http://${process.env.REACT_APP_BAKEND_URL}`,
            url: `/delete-book/${bookId}`
        }
        axios(config).then(response =>{
             console.log(response.data);
             this.setState({
                 data:response.data
             });

             
        })
    }


    render() {
        return (
            <div className="row">
                {/*<FormBook/>*/}

                <Form onSubmit={this.handelSubmit}>
                    <Form.Group className="mb-3" controlId="bookTilte">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" onChange={this.handelTitel} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bookDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" onChange={this.handelDescription} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="bookStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Select onChange={this.handelstatus} required>
                            <option>Available</option>
                            <option>Unavailable</option>

                        </Form.Select>
                    </Form.Group>

                    {/*  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>*/}


                    <Button variant="primary" type="submit">
                        Create Book
                    </Button>
                </Form>

                {
                    this.state.showBooks ?
                        this.state.data.map(itme => {
                            return <BestBooks title={itme.title} 
                            descriptions={itme.descriptions} 
                            email={this.state.email} 
                            bookId={itme._id}
                            handelDelete={this.handelDelete}
                            />
                        })
                        :

                        <AlertShow />
                }
            </div>
        )
    }
}

export default Main;
