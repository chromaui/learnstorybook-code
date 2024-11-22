export const getFormattedDate = (date: Date) => {
  const formatted = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return formatted
}
