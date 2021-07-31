import { useState } from 'react';

export default function WordForm({ createStory }) {
  const [story, setStory] = useState({
    name:'',
    feeling:'',
    descriptive:'',
    friend:'',
    number:'',
    artist:'',
    color:'',
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
      <label htmlFor='feeling'>
        feeling:
        <input 
          type='text' 
          id='feeling' 
          name='feeling'
          value={story.feeling}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='descriptive'>
        descriptive word:
        <input 
          type='text' 
          id='descriptive' 
          name='descriptive'
          value={story.descriptive}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='friend'>
        friend name:
        <input 
          type='text' 
          id='friend' 
          name='friend'
          value={story.friend}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='number'>
        number:
        <input 
          type='text' 
          id='number' 
          name='number'
          value={story.number}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='artist'>
        artist:
        <input 
          type='text' 
          id='artist' 
          name='artist'
          value={story.artist}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='color'>
        color:
        <input 
          type='text' 
          id='color' 
          name='color'
          value={story.color}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='bodyPart'>
        body part:
        <input 
          type='text' 
          id='bodyPart' 
          name='bodyPart'
          value={story.bodyPart}
          onChange={handleChange}
        />
      </label>
      <button type='submit' >hey</button>
    </form>
  )
}