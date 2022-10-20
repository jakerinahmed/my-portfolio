import React from 'react'
import './style.css'
import { Cards, InvertedCards } from '../../components'

let projectInfo = [
    { link: "https://github.com/jakerinahmed/project-1-front-end", title: "wroteIt", source: 'wroteIt.png', content: "wroteIt is a wesbite where users can anonymously post blog entries, comment on other journal entries and react to other entries. The website is largely influenced by the popular discussion website Reddit. The website was created using HTML, CSS and JavaScript." },
    { link: "https://github.com/karldudley/makeithappen", title: "Make It Happen", source: 'makeithappen.png', content: "Make It Happen is a website which users can use to track a variety of habits. The website was created using HTML/CSS and JavaScript with a persistent database created using PostgreSQL and authorisation and authentication implementation" },
    { link: "https://github.com/Babole/Lap-3-Project", title: "Trivia Rangers", source: 'triviarangers.png', content: "Trivia Rangers is a website in which players can compete against each other in a series of round-based trivia questions. This website was created using React and Socket.IO." }

]

const Projects = () => {
    return (
        <div className='container p-5'>

            <div className='text-center'>
                <h1>Some projects I've worked on</h1>
            </div>

            <div className='container text-center'>
                <Cards Cards={projectInfo[0]} />
                <InvertedCards Cards={projectInfo[1]} />
                <Cards Cards={projectInfo[2]} />
            </div>

        </div>
    )
}

export default Projects
