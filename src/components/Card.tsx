import React from 'react'

type CardProps = {
  reverse?: boolean
  children: React.ReactNode
}

export const Card = ({ reverse, children }: CardProps) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}
