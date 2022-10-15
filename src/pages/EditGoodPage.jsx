import React from 'react'
import { useParams } from 'react-router'

const EditGoodPage = () => {
    const { id } = useParams()

  return (
    <div>EditGoodPage {id}</div>
  )
}

export default EditGoodPage