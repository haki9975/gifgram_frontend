import React from 'react';
import SimpleCard from './Card';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Home() {
    const image =  <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Holga_120_GCFN.jpg/1280px-Holga_120_GCFN.jpg"} width="500px" alt={"a cheap holga camera"}></img>
    const title = <h1> Hello, Welcome to Gifstagram!</h1>
    const text =   <p>We are an anonymous image sharing board. No account is required to post or comment.
                 We do ask that you are consistent with your username when you are posting or commenting. 
           To use this app, navigate to the view posts button in the top right corner. If you would like to
             upload a post, copy the link for the image you wish to share, navigate to the add post page, and 
             fill out the form. If you love someone's image, and would like to show them, hit the + button below
             their image. If you would like to say something to them, click the add comment button, and fill out the 
             form. Thanks for playing! We hope you enjoy using it as much as we enjoyed building it!</p>
    
    return(
        <div>
          <SimpleCard children={title} />
          <SimpleCard children={image} />
          <SimpleCard children={text} />
          <SimpleCard children={<Button variant="contained" color="primary" href="/about" >About</Button>} />
        </div>
    )
}

export default Home