import React from 'react'
import { useParams } from 'react-router-dom'

function BlogOpen() {
  const { id } = useParams();
  return (
    <div>Blog {id}</div>
  )
}

export default BlogOpen