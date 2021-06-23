import React from 'react'

class Commentform extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("A comment was submitted:" + this.state.value);
    }

        render(){
            return(
                <div>
                   <h1>Comment Form</h1>
                   <form onSumit={this.handleSubmit}>
                        <label>Username:</label><br />
                        <input type="text" name="username" value={this.state.value} onChange={this.handleChange} /><br />
                        <label>Comment:</label><br />
                        <textarea name="body" value={this.state.value} onChange={this.handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        }
    
}

export default Commentform;
