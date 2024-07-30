import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    const newVote = (id) => {
      dispatch(vote(id))
      const content = anecdotes.find(anecdote => anecdote.id === id).content
      dispatch(notify(`You voted for '${content}'`, 3))
    }

    const filteredAnecdotes = anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            {filteredAnecdotes
                .slice()
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div> {anecdote.content} </div>
                        <div> 
                            has {anecdote.votes}
                            <button onClick={() => newVote(anecdote.id)}>vote</button>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default AnecdoteList