export type FeedbackDataProps = {
  id: number | string
  rating: number
  text: string
}
export type newFeedbackProps = Pick<FeedbackDataProps, 'rating' | 'text'>
