import { createContext, ReactNode, useEffect, useState } from 'react'
import { FeedbackDataProps, newFeedbackProps } from '../data/FeedbackData'

type FeedbackEditProps = {
  item: FeedbackDataProps | null
  edit: boolean
}

export type FeedbackContextProps = {
  feedback: FeedbackDataProps[]
  deleteFeedback: (id: string | number) => void
  addFeedback: (newFeedback: newFeedbackProps) => void
  editFeedback: (item: FeedbackDataProps) => void
  feedbackEdit: FeedbackEditProps
  updateFeedback: (
    id: FeedbackDataProps['id'],
    updatedItem: newFeedbackProps
  ) => void
  isLoading: boolean
}

export const FeedbackContext = createContext<FeedbackContextProps | null>(null)

export const FeedbackProvider = ({
  children
}: {
  children: ReactNode | ReactNode[]
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState<FeedbackDataProps[]>([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    const fetchFeedback = async () => {
      const data = await fetch(`/feedback?_sort=id&_order=desc`).then((res) =>
        res.json()
      )

      setFeedback(data)
      setIsLoading(false)
    }
    fetchFeedback()
  }, [])

  const updateFeedback = async (
    id: FeedbackDataProps['id'],
    updatedItem: newFeedbackProps
  ) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem)
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }

  const editFeedback = (item: FeedbackDataProps) => {
    setFeedbackEdit({ item, edit: true })
  }

  const addFeedback = async (newFeedback: Partial<FeedbackDataProps>) => {
    const response = await fetch(`/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()

    setFeedback([data as FeedbackDataProps, ...feedback])
  }

  const deleteFeedback = async (id: string | number) => {
    if (window.confirm('Are you sure you want delete?'))
      await fetch(`/feedback/${id}`, { method: 'DELETE' })
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        isLoading,
        editFeedback,
        updateFeedback,
        feedbackEdit: feedbackEdit as FeedbackEditProps
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
