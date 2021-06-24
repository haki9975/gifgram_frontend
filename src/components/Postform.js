import React from 'react'

 class Postform extends React.Component {
     state = {
         username: "",
         image: ""
        }
     constructor(){
         super();
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
     }

     handleChange = (e) => {
         const target = e.target
         console.log(target)
        this.setState({
             [target.name]: target.value
         })
     }

     handleSubmit = (e) => {
         console.log(this)
        e.preventDefault();
        alert("A post was submitted: " + this.state.value)
        this.setState({
            username: "",
            image: ""
        })
     }
    
   render() {
     return (
         <div>
             <h1>Post Form</h1>
             <form onSubmit={this.handleSubmit}>
                 <label>Username:</label><br />
                 <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                 <label>Image Source URL:</label><br />
                 <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/><br />
                 <button type="submit">Submit</button>
             </form>
         </div>
     )
    }
}

export default Postform;
