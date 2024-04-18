import React from 'react'

const Create = (props) => {
    const {info} = props
  return (
  <div>
    {info}
    {props.children}
  </div>
)
}

export default Create