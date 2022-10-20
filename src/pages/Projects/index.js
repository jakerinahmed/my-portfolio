import React from 'react'
import './style.css'
import { Cards } from '../../components'

let projectInfo = [
    { link: "https://github.com/jakerinahmed/project-1-front-end", title: "wroteIt", source: 'wroteIt.png' },
    { link: "https://github.com/karldudley/makeithappen", title: "Make It Happen", source: 'makeithappen.png' },
    { link: "https://github.com/Babole/Lap-3-Project", title: "Trivia Rangers", source: 'triviarangers.png' }

]

const Projects = () => {
    return (
        <div className='container p-5'>

            <div className='text-center'>
                <h1>Some projects I've worked on</h1>
            </div>

            <div className='container text-center'>
                <Cards Cards={projectInfo[0]} />
                <Cards Cards={projectInfo[1]} />
                <Cards Cards={projectInfo[2]} />
            </div>

        </div>
    )
}

export default Projects
