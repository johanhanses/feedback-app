import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {
  FeedbackContext,
  FeedbackContextProps
} from '../context/FeedbackContext'
import { FeedbackDataProps } from '../data/FeedbackData'
import { Card } from './Card'

type FeedbackItemProps = {
  item: FeedbackDataProps
}

export const FeedbackItem = ({ item }: FeedbackItemProps) => {
  const { deleteFeedback, editFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextProps

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        onClick={() => editFeedback(item)}
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
