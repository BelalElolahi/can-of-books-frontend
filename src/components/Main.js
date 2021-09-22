import React, { Component } from 'react';
//import FormBook from './bookForm';
import axios from 'axios';
import BestBooks from './BestBooks';
import AlertShow from './AlertShow';
import {
    Form,
    Button,
    Modal
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
            id: '',
            descriptions: '',
            status: '',
            showForm: false

        };
    }


    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BAKEND_URL}/books`)
            .then(res => {

                console.log(res.data, "hello");
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
    handelTitel = (e) => {

        this.setState({
            title: e.target.value
        });
        console.log(this.state.title);
    }

    handelDescription = (e) => {
        this.setState({
            descriptions: e.target.value
        });
    }

    handelstatus = (e) => {
        this.setState({
            status: e.target.value
        });
        console.log(this.state.title);
        console.log(this.state.email);

    }

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.title.value, "show ");

        let config = {
            method: "POST",
            baseURL: `${process.env.REACT_APP_BAKEND_URL}`,
            url: "/create-book",
            data: {
                title: this.state.title,
                descriptions: this.state.descriptions,
                status: this.state.status,
                email: this.state.email
            }

        }
        axios(config).then(response => {
            console.log(response.data);
            this.setState({
                data: response.data
            });

            console.log(this.state.data);

        }).catch(err => {
            console.log(err);
            this.setState({
                showBooks: false
            });

        });
        e.target.title.value = "";
        e.target.description.value = "";
        e.target.status.value = "";
    }

    handelDelete = (id) => {
        let bookId = id;
        let config = {
            method: "DELETE",
            baseURL: `${process.env.REACT_APP_BAKEND_URL}`,
            url: `/delete-book/${bookId}`
        }
        axios(config).then(response => {
            console.log(response.data);
            this.setState({
                data: response.data
            });


        }).catch(err => {
            console.log(err);
            this.setState({
                showBooks: false
            });

        });
    }

    handelUpdateForm = (e) => {
        e.preventDefault();
        console.log(this.state.title);
        console.log(this.state.title);

        let config = {
            method: "PUT",
            baseURL: `${process.env.REACT_APP_BAKEND_URL}`,
            url: `/update-book/${this.state.id}`,
            data: {
                title: this.state.title,
                descriptions: this.state.descriptions,
                status: this.state.status,
                email: this.state.email
            }

        }
        axios(config).then(response => {
            console.log(response.data, 'There it is ');
            this.setState({
                data: response.data
            });

            console.log(this.state.data);

        }).catch(err => {
            console.log(err);
            this.setState({
                showBooks: false
            });

        });
        e.target.title.value = "";
        e.target.description.value = "";
        e.target.status.value = "";
        this.setState({showForm: false});

    }

    handelUpdate = (bookID, tilte, descriptions, status, email) => {
        console.log(tilte);

        this.setState({
            id: bookID,
            email: email,
            title: tilte,
            descriptions: descriptions,
            status: status,
            showForm: true
        })




    }



    render() {
        return (
            <div className="row">
                {/*<FormBook/>*/}
                {
                    !this.state.showForm ?
                        <Form onSubmit={this.handelSubmit}>
                            <Form.Group className="mb-3" controlId="bookTilte">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" onChange={this.handelTitel} required name="title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bookDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" onChange={this.handelDescription} name="description" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bookStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select onChange={this.handelstatus} required name="status">
                                    <option>Available</option>
                                    <option>Unavailable</option>

                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Create Book
                            </Button>
                        </Form>
                        :
                        <Modal.Dialog>
                            <Modal.Header onClick={()=>{this.setState({showForm: false})}}>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                            <Form onSubmit={this.handelUpdateForm}>
                            <Form.Group className="mb-3" controlId="bookTilte">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.state.title} onChange={this.handelTitel} required name="title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bookDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={this.state.descriptions} onChange={this.handelDescription} required name="description"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bookStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select defaultValue={this.state.status} onChange={this.handelstatus} required name="status" >
                                    <option>Available</option>
                                    <option>Unavailable</option>

                                </Form.Select>
                            </Form.Group>
                            <Button variant="secondary" onClick={()=>{this.setState({showForm: false})}}>Close</Button>
                            <Button variant="primary" type="submit"  >
                            Save changes
                            </Button>
                        </Form>
                            </Modal.Body>
                        </Modal.Dialog>



                }


                {/*  <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>*/}



                {
                    this.state.showBooks ?
                        this.state.data.map(itme => {
                            return <BestBooks title={itme.title}
                                descriptions={itme.descriptions}
                                email={this.state.email}
                                bookId={itme._id}
                                handelDelete={this.handelDelete}
                                handelUpdate={this.handelUpdate}
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
