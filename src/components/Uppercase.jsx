import React, { useState } from 'react'

const Uppercase = (props) => {
  const [word, setword] = useState(props.children)
  return (
    <div>
      <h3>{word.toUpperCase()}</h3>  
    </div>
  )
}

export default Uppercase