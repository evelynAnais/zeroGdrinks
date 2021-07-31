import { useState } from 'react';

export default function WordForm({ createStory }) {
  const [story, setStory] = useState({
    name:'',
    two:'',
    three:'',
  })

  const handleChange = (e) => setStory({
    ...story,
    [e.target.name]:e.target.value
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createStory(story)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name:
        <input 
          type='text' 
          id='name' 
          name='name'
          value={story.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='two'>
        Two:
        <input 
          type='text' 
          id='two' 
          name='two'
          value={story.two}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='three'>
        Three:
        <input 
          type='text' 
          id='three' 
          name='three'
          value={story.three}
          onChange={handleChange}
        />
      </label>
      <button type='submit' >hey</button>
    </form>
  )
}