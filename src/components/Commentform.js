import React from 'react'
import { connect } from 'react-redux';
import { sendComments } from '../redux/commentSlice'
import { fetchPosts } from "../redux/postSlice";
import Button from '@material-ui/core/Button';


class CommentForm extends React.Component {
    state = {
        formInput: {
        username: "",
        body: "",
        post_id: "",
        }
    };
    constructor(props){
        super(props);
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        this.setState({
           formInput: {
               ...this.state.formInput,
               [target.name]: target.value,
               post_id:  target.id
           }
        })
    }

    handleSubmit = (e, formInput) => {
        e.preventDefault();
        console.log(formInput)
        this.props.addComment(formInput)
        this.props.getPosts(formInput)
        alert("A comment was submitted: " + this.state.formInput.body);
        this.setState({
            formInput: {
               username: "",
                body: "",
                post_id: ""
            }
        })
     }

        render(){
            
            return(
                
                <div>
                   <b><p>Add Comment:</p></b>
                   <form  onSubmit={(e) => this.handleSubmit(e, this.state.formInput)}>
                        <label >Username:</label><br />
                        <input id={this.props.id} type="text" name="username" value={this.state.formInput.username} onChange={this.handleChange} /><br />
                        <label>Comment:</label><br />
                        <textarea id={this.props.id} name="body" value={this.state.formInput.body} onChange={this.handleChange} /><br />
                        <Button variant="contained" type="submit" color="primary">Submit</Button>
                    
                    </form>
                </div>
                
            )
        }
    
}



const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => {
            dispatch(sendComments(comment))        
        },
        getPosts: () => {
            dispatch(fetchPosts())
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);
