import React from 'react'
import './style.css'

const Projects = () => {
    return (
        <div className='container p-5'>
            <h1>Projects</h1>

            <div className="card" width="100%">
                <img src="wroteIt.png" className="card-img-top" alt="wroteIt homepage" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://github.com/jakerinahmed/project-1-front-end" className="btn btn-primary">GitHub</a>
                </div>
            </div>


        </div>
    )
}

export default Projects
