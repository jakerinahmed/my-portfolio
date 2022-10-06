import React from 'react'
import './style.css'

const Projects = () => {
    return (
        <div className='container p-5'>
            <h1>Some projects I've worked on</h1>

            <div className='container text-center'>
                <div className='row'>

                    <div class="col-md-6 col-sm-4">
                        <h3>wroteIt</h3>
                        <img src='wroteIt.png' alt='wroteIt' className='img-fit' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates laudantium saepe sint numquam iusto praesentium cumque nemo exercitationem architecto!</p>
                        <a href="https://github.com/jakerinahmed/project-1-front-end" target="_blank" rel="noopener noreferrer" className='project-links'>GitHub</a>
                    </div>
                    <div class="col-md-6 col-sm-4">
                    <h3>Make It Happen</h3>
                        <img src='makeithappen.png' alt='Make It Happen' className='img-fit' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates laudantium saepe sint numquam iusto praesentium cumque nemo exercitationem architecto!</p>
                        <a href="https://github.com/karldudley/makeithappen" target="_blank" rel="noopener noreferrer" className='project-links'>GitHub</a>
                    </div>

                    <div class="w-100 d-none d-md-block py-5"></div>

                    <div class="col-md-6 col-sm-4">.col-6 .col-sm-4</div>
                    <div class="col-md-6 col-sm-4">.col-6 .col-sm-4</div>
                </div>
            </div>

        </div>
    )
}

export default Projects
