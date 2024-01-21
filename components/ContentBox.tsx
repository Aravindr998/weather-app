import React from 'react'

type ContentBoxTypes = {
    children: React.ReactNode,
    title: string
}

const ContentBox = ({children, title}: ContentBoxTypes) => {
  return (
    <div className="p-4 rounded-lg backdrop-blur-sm bg-white/30 hover:backdrop-blur-lg">
        <div className="border-b">
            <h6 className="font-primary font-extralight text-white">{title}</h6>
        </div>
        <div className="pt-3">
            {children}
        </div>
    </div>
  )
}

export default ContentBox