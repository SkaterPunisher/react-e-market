import React from 'react'
import { useParams } from 'react-router'

const SingleGoods = () => {
    const { id } = useParams()

  return (
    <div>{id}</div>
  )
}

export default SingleGoods