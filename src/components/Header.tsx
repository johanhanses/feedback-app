type HeaderProps = {
  text: string
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <header style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#ff6a95' }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}
