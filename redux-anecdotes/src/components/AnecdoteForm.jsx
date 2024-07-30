import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify} from '../reducers/notificationReducer'

const AnecdotesForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(notify(`You created '${content}'`, 3))
    }
    
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name = 'anecdote'/>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdotesForm