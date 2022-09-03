import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  version?: 'primary' | 'secondary'
  type?: 'submit' | 'reset' | 'button'
  isDisabled?: boolean
}

export const Button = ({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  )
}
