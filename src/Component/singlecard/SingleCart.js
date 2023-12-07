import React from 'react'
import { useParams } from 'react-router-dom'


function SingleCart() {
    const data=useParams()
  return (
    <div>SingleCart :
        <h1>{data.id}</h1>
    </div>
    
  )
}

export default SingleCart