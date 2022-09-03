import { useContext, useEffect, useState } from 'react'
import {
  FeedbackContext,
  FeedbackContextProps
} from '../context/FeedbackContext'
import { newFeedbackProps } from '../data/FeedbackData'
import { Button } from './Button'
import { Card } from './Card'
import { RatingSelect } from './RatingSelect'

export const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextProps

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Message must be at least 10 characters')
    } else {
      setMessage('')
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item!.text)
      setRating(feedbackEdit.item!.rating)
    }
  }, [feedbackEdit])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback: newFeedbackProps = {
        text,
        rating
      }

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item!.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
      setRating(10)
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          selected={rating}
          select={(rating) => setRating(rating)}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button
            type="submit"
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  )
}
