import React from 'react'
import './moviedate.css'

const MovieDate = ({movie}) => {
    return (
            <div className={`content ${movie.active ? 'active':undefined}`}>
                <h2>{movie.date}</h2>
            </div>
    )
}

export default MovieDate
