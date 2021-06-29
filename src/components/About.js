import React from 'react'
import SimpleCard from './Card'

function about(){

    const aboutMe = <h2>About Me:</h2> 
    const aboutIntro = <p>My name is Elias Robert Hakim, and I built this project as the capstone project
        for my web development program at the Flatiron School. I am skilled in Ruby, Ruby On Rails, SQL, Javascript,
        React, Redux, and HTML/CSS </p>

    return(
        <div>
            <SimpleCard children={aboutMe}/>
            <SimpleCard children={aboutIntro} />
        </div>
    )
}

export default about
