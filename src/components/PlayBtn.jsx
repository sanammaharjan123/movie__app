import React from 'react'
import './playbtn.css'

function PlayBtn({movie}) {
  return (
    <div className={`trailer d-flex align-items-center justify-content-center ${
        movie.active ? 'active' : undefined
    } `}>
    <a href="" className="playBtn">
        <ion-icon name="play-circle-outline"></ion-icon>
    </a>
    <p>Watch Trailer</p>

</div>
  )
}

export default PlayBtn
