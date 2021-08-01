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
    <div className='container'>
      <form onSubmit={handleSubmit} className='row d-flex'>
          <label htmlFor='name' class='form-label'>
            Name:
            <input 
              class="form-control mb-3"
              type='text' 
              id='name' 
              name='name'
              value={story.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor='feeling'>
            Feeling:
            <input 
              class="form-control mb-3"
              type='text' 
              id='feeling' 
              name='feeling'
              value={story.feeling}
              onChange={handleChange}
            />
          </label>
        <label htmlFor='descriptive'>
          Descriptive Word:
          <input 
            class="form-control mb-3"
            type='text' 
            id='descriptive' 
            name='descriptive'
            value={story.descriptive}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='friend'>
          Friend Name:
          <input 
            class="form-control mb-3"
            type='text' 
            id='friend' 
            name='friend'
            value={story.friend}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='number'>
          Number:
          <input 
            class="form-control mb-3"
            type='text' 
            id='number' 
            name='number'
            value={story.number}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='artist'>
          Music Artist:
          <input 
            class="form-control mb-3"
            type='text' 
            id='artist' 
            name='artist'
            value={story.artist}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='color'>
          Color:
          <input 
            class="form-control mb-3"
            type='text' 
            id='color' 
            name='color'
            value={story.color}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='bodyPart'>
          Body Part (plural):
          <input 
            class="form-control mb-3"
            type='text' 
            id='bodyPart' 
            name='bodyPart'
            value={story.bodyPart}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='person'>
          Favorite Person:
          <input 
            class="form-control mb-3"
            type='text' 
            id='person' 
            name='person'
            value={story.person}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='object'>
          Gift Object:
          <input 
            class="form-control mb-3"
            type='text' 
            id='object' 
            name='object'
            value={story.object}
            onChange={handleChange}
          />
        </label>
        <button type='submit' className="btn btn-dark" >Let's do this!</button>
      </form>
    </div>
  )
}