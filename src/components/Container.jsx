import React from 'react'

export default function Container({ className = '', children }) {
  return (
    <div className= {`w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className} xs:px-2`}>  
        {children}
    </div>
  )
}
