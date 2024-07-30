
// eslint-disable-next-line react/prop-types
const AnecdoteForm = ({ addAnecdote }) => {
  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('AnecdoteForm: onCreate called with content:', content); // Debug log
    await addAnecdote(content)
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
