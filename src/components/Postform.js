import React from 'react'
import { connect } from 'react-redux';
import { sendPosts } from '../redux/postSlice';

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
        this.handleSubmit.bind(this);
     }

     


     handleChange = (e) => {
         const target = e.target
         this.setState({
             formInput: {
                 ...this.state.formInput,
                 [target.name]: target.value
             }
         })
        }

     handleSubmit = (e, formInput) => {
         const target = e.target
        e.preventDefault();
         this.props.addPost(formInput)
        alert("A post was submitted: ")
        this.setState({
            post: {
            username: "",
            image: ""
            }
        })
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
