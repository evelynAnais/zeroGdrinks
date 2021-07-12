import { useState } from 'react';

export default function WordForm() {
  const [story, setStory] = useState({
    one:'',
    two:'',
    three:'',
  })

  // const handleChange = (e) => setStory({
  //   ...story,
  //   [e.target.name]:e.target.value
  // })

  return (
    <form >
      <label htmlFor='name'>
        Volunteer:
        <input 
          type='text' 
          id='name' 
          name='name'
          // value=

        />
      </label>
    </form>
  )
}