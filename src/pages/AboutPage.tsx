import { Link } from 'react-router-dom'
import { Card } from '../components/Card'

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this App</h1>
        <p>React prutt</p>
        <p>V: 1.0.0</p>
        <p>
          <Link to="/">Go back to home</Link>
        </p>
      </div>
    </Card>
  )
}
