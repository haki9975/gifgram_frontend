import React from 'react'
import { connect } from 'react-redux';
import { sendPosts } from '../redux/postSlice';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

 class Postform extends React.Component {
     state = { 
         formInput: {
         username: "",
         image: "" },
         posts: []
        }
     constructor(){
         super();
        this.handleChange.bind(this);
        // this.handleSubmit.bind(this);
     }

     


     handleChange = (e) => {
         const target = e.target
         console.log(this)
         this.setState({
             formInput: {
                 ...this.state.formInput,
                 [target.name]: target.value
             }
         })
        }

     handleSubmit = (e, formInput) => {
         e.preventDefault();
         this.props.addPost(formInput)
        alert("Your post was submitted!")
        this.setState({
            formInput: {
                username: "",
                image: ""
            }
        })
         this.props.history.push("/posts")
    }
    
   render() {
     return (
         <div>
             <h1>Post Form</h1>
             <form onSubmit={(e) => this.handleSubmit(e, this.state.formInput)}>
                 <label>Username:</label><br />
                 <input type="text" name="username" value={this.state.formInput.username} onChange={this.handleChange} /><br />
                 <label>Image Source URL:</label><br />
                 <input type="text" name="image" value={this.state.formInput.image} onChange={this.handleChange}/><br />
                 <button type="submit">Submit</button>
             </form>
         </div>
     )
    }
    
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (post) => {
            dispatch(sendPosts(post))
        }
    }
}
export default connect(null, mapDispatchToProps)(Postform)
