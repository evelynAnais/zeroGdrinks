import { useState } from 'react';

export default function WordForm({ createStory }) {
  const [story, setStory] = useState({
    one:'',
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
    <form >
      <label htmlFor='one'>
        One:
        <input 
          type='text' 
          id='one' 
          name='one'
          value={story.one}
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
    </form>
  )
}