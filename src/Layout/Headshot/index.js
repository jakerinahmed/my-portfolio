import React from 'react'
import './style.css'

const Headshot = () => {
    return (
        <div className='bg-color border-main'>
            <div className="home-container">
                <div className="headshot">
                    <h1 className='white-text'>&#128075; Hi, I'm Jakerin Ahmed</h1>
                    <br />
                    <img src="headshot.JPG" alt="Jakerin" width="150px" className="picture" />
                    <br />
                    <h2 className="p-3 white-text">Full Stack Developer</h2>


                        <a className="white-text mx-2 social_media_links" href="https://www.linkedin.com/in/syedul-jakerin-ahmed-3859041a8/" target="_blank" rel="noopener noreferrer"
                        >Linkedin</a>
                        <a className="white-text mx-2 social_media_links" href="https://github.com/jakerinahmed" target="_blank" rel="noopener noreferrer">GitHub</a>


                </div>
            </div>
        </div>
    )
}

export default Headshot
