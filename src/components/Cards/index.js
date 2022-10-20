import React from 'react'

const Cards = ({Cards}) => {
    return (

        <div className="card mb-3">
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={Cards.source} class="img-fluid" alt="wroteIt" />
                </div>
                <div className='col-md-8'>
                    <div class="card-body">
                        <h5 class="card-title">{Cards.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={Cards.link} target="_blank" rel="noopener noreferrer" class="project-links">GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards
