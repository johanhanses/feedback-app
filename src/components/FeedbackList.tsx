import { FeedbackItem } from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import {
  FeedbackContext,
  FeedbackContextProps
} from '../context/FeedbackContext'
import { Spinner } from './Spinner'

export const FeedbackList = () => {
  const { feedback, isLoading } = useContext(
    FeedbackContext
  ) as FeedbackContextProps

  if (!isLoading && (!feedback || !feedback.length))
    return <p>No Feedback yet</p>

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
