import React, { Component } from 'react';
//import FormBook from './bookForm';
import axios from 'axios';
import BestBooks from './BestBooks';
import AlertShow from './AlertShow';
import FormBook from './bookForm';
import UpdateForm from './UpdateForm';
import UserProfile  from './UserProfile';
import { Container } from 'react-bootstrap';

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
            email: this.props.UserEmail,
            showBooks: false,
            title: '',
            id: '',
            descriptions: '',
            status: '',
            showForm: false

        };
        console.log(this.state.email,"there");
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
        
        this.setState({
            title:e.target.title.value
        });
        
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
        this.setState({ showForm: false });

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

    handleClose=()=>{
        
        this.setState({
            showForm:false
        });

    }



    render() {
        return (
           <Container>
            
            
            <div className="row">
            <UserProfile name={this.props.name}
                    email={this.props.email}
                    picture={this.props.picture} />
                
                {!this.state.showForm ?
                    <FormBook handelSubmit={this.handelSubmit}
                        handelTitel={this.handelTitel}
                        handelDescription={this, this.handelDescription}
                        handelstatus={this.handelstatus} />
                    :

                    <UpdateForm handelUpdateForm={this.handelUpdateForm}
                        handelTitel={this.handelTitel}
                        handelDescription={this, this.handelDescription}
                        handelstatus={this.handelstatus}
                        handleClose={this.handleClose}
                        title={this.state.title} descriptions={this.state.descriptions}
                        status={this.state.status} showForm={this.state.showForm} />}
            </div>
            <div className= "row">
                    {this.state.showBooks ?
                        this.state.data.map(itme => {
                            return <BestBooks title={itme.title}
                                descriptions={itme.descriptions}
                                email={this.state.email}
                                bookId={itme._id}
                                handelDelete={this.handelDelete}
                                handelUpdate={this.handelUpdate} />;
                        })
                        :

                        <AlertShow />}

                </div></Container>
               
            
        )
    }
}

export default Main;
