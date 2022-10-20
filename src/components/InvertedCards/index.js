import React from 'react'
import '../Cards/style.css'

const InvertedCards = ({ Cards }) => {
    return (

        <div className="card mb-3">
            <div className='row g-0'>
                <div className='col-md-4'>
                    <div class="card-body">
                        <h5 class="card-title">{Cards.title}</h5>
                        <p class="card-text">{Cards.content}</p>
                        <a href={Cards.link} target="_blank" rel="noopener noreferrer" class="project-links">GitHub</a>
                    </div>
                </div>
                <div className='col-md-8'>
                    <img src={Cards.source} class="img-fluid" alt="wroteIt" />
                </div>
            </div>
        </div>

    )
}

export default InvertedCards
