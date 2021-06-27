import React from 'react'
import { connect } from 'react-redux';
import { sendComments } from '../redux/commentsSlice'

class Commentform extends React.Component {
    state = {
        username: "",
        body: ""
    };
    constructor(){
        super();
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    
        
    handleChange = (e) => {
        console.log(e)
        const target = e.target;
        // const username = target.username
        // const body = target.body
            this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("A comment was submitted: " + this.state.body);
        //  submitComment //Call .fetch() here to send comment to DB
 

        
        
        this.setState({
            username: "",
            body: ""
        })
    }

        render(){
            return(
                <div>
                   <h1>Comment Form</h1>
                   <form onSubmit={this.handleSubmit}>
                        <label>Username:</label><br />
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                        <label>Comment:</label><br />
                        <textarea name="body" value={this.state.body} onChange={this.handleChange} /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(sendComments(comment))
        }
    }
}

export default connect(null, mapDispatchToProps)(Commentform);
