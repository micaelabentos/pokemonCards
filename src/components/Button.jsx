import React, { useState } from 'react'
import '../stylesheets/Button.css'

const Button = () => {
     
    const [likes, setLikes ] = useState(0);

  return (
    <button className="btn" onClick={ () => setLikes(likes+1) }> {likes} ❤️</button>
  )
}

export default Button