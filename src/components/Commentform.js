import React from 'react'

function Commentform() {
    return (
        <div>
            <h1>Comment Form</h1>
            <div>
                <label>Username:</label><br />
                <input type="text" name="username"></input><br />
            </div>
            <div>
                <label>Comment:</label><br />
                <textarea name="body"></textarea>
            </div>

        </div>
    )
}

export default Commentform;
