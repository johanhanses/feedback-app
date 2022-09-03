import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackForm } from './components/FeedbackForm'
import { FeedbackList } from './components/FeedbackList'
import { FeedbackStats } from './components/FeedbackStats'
import { Header } from './components/Header'
import AboutPage from './pages/AboutPage'
import { AboutIconLink } from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

export const App = () => (
  <FeedbackProvider>
    <Router>
      <Header text="Feedback UI" />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  </FeedbackProvider>
)
