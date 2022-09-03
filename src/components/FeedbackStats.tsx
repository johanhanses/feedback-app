import { useContext } from 'react'
import {
  FeedbackContext,
  FeedbackContextProps
} from '../context/FeedbackContext'

export const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext) as FeedbackContextProps

  const average = (
    feedback.reduce((acc, curr) => {
      return acc + Number(curr.rating)
    }, 0) / feedback.length
  ).toFixed(1) as unknown as number

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
