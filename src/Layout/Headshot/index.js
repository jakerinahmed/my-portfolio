import React from 'react'
import './style.css'

const Headshot = () => {
    return (
        <div className='bg-color border-main'>
            <div className="home-container">
                <div className="social_media_links">
                    <h1 className='ruby-text'>&#128075; Hi, I'm Jakerin Ahmed</h1>
                    <img src="/IMG_5162.JPG" alt="Picture of Jakerin" width="150px" class="picture" />
                    <h2 className="p-3 ruby-text">Full Stack Developer</h2>

                    <a className="ruby-text mx-2" href="https://www.linkedin.com/in/syedul-jakerin-ahmed-3859041a8/"
                        >Linkedin</a>
                    <a className="ruby-text mx-2" href="https://github.com/jakerinahmed">GitHub</a>
                </div>
            </div>
        </div >
    )
}

export default Headshot
