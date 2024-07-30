import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
    axios.get(baseUrl).then(res => res.data)

export const createAnecdote = newAnecdote => {
    console.log('createAnecdote: called with newAnecdote:', newAnecdote); // Debug log
    if (newAnecdote.content.length >= 5) {
      return axios.post(baseUrl, newAnecdote).then(res => {
        return res.data;
      })
    } else {
      console.error('createAnecdote: content too short') // Debug log
      return Promise.reject(new Error('Content must be at least 5 characters long'))
    }
}

export const updateAnecdote = updatedAnecdote =>
    axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)