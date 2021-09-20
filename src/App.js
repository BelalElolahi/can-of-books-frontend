import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Footer from './components/Footer';
import Header from './components/Header';*/
import BestBooks from './components/BestBooks';


 class App extends Component {
     constructor(props){
         super(props);
         this.state ={
            data:[]
         };
     }


   componentDidMount() {
    axios.get(`http://localhost:8000/get-data`)
      .then(res => {
       //  console.log(res.data);
        this.setState({
            data: res.data,
            showBooks:true,
            showAlert:false     
        });
       // console.log(this.state.data);

      }).catch(err =>{
       console.log(err);
        this.setState({
            showBooks:false,
            showAlert:true     
        });

      });
  }
    render() {
        return (
            <div className="row">
                {
                    this.state.data.map(itme =>{
                        return <BestBooks  title={itme.title} descriptions={itme.descriptions} email={itme.email}/>
                    })
                }

                   
                
                   
            </div>
        );
    }
}

export default App;
