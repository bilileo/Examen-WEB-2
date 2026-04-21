import React from 'react'

const Error = ({children}: {children: React.ReactNode}) => {
  return (
    <p className='text-red-400 text-xs mt-1'>{children}</p>
  )
}

export default Error