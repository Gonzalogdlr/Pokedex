import React from 'react'

export default function Minicard({name, image}) {
  return (
    <div>
      <h1>{image}</h1>
      <h1>{name}</h1>
    </div>
  )
}
