import React from 'react'

 function Postform() {
    return (
        <div>
            <h1>Post Form</h1>
            <form>
                <div>
                    <label>Username:</label><br />
                    <input type="text" name="username" /><br />
                </div>
                <div>
                    <label>Image Source URL:</label><br />
                    <input type="text" name="image" />
                </div>
            </form>
        </div>
    )
}

export default Postform;
