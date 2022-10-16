import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length == 1,
    })
  return (
    <Link to={to} {...props} style={{
        color: match ? 'blue' : 'black'
    }}
    >
        {children}
    </Link>
  )
}

export default CustomLink