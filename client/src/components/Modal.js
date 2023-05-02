import { useState } from 'react'

const Modal = ({ mode, setMode }) => {
  console.log(mode)
  const [form, setForm] = useState({
    line: '',
  })

  console.log(form)
  const createMode = true
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    console.log(name + ':' + value)
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <form onSubmit={handleSubmit} action=''>
          <div className='close-icon' onClick={() => setMode(null)}>
            X
          </div>
          <h1>{createMode ? 'Add' : 'Edit'} your adventure</h1>
          <h5>Upload a photo of where you have visited</h5>
          <p>Paste a url from the internet</p>

          <div className='input-container'>
            <label htmlFor='photo'>PHOTO</label>
            <input
              type='text'
              id='photo'
              name='photo'
              required
              value={form.photo || ''}
              onChange={handleChange}
            />
          </div>

          <div className='input-container'>
            <label htmlFor='title'>TITLE</label>
            <input
              type='text'
              id='title'
              name='title'
              required
              value={form.title || ''}
              onChange={handleChange}
            />
          </div>

          <div className='input-container'>
            <label htmlFor='website'>WEBSITE</label>
            <input
              type='text'
              id='website'
              name='website'
              required
              value={form.website || ''}
              onChange={handleChange}
            />
          </div>

          <div className='input-container'>
            <label htmlFor='description'>DESCRIPTION</label>
            <input
              type='text'
              id='description'
              name='description'
              required
              value={form.description || ''}
              onChange={handleChange}
            />
          </div>

          <div className='multi-input'>
            <div className='input-container'>
              <label htmlFor='line'>FIRST LINE</label>
              <input
                type='text'
                id='line'
                placeholder='First Line of Address'
                required
                name='line'
                value={form.line || ''}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='country'>COUNTRY</label>
              <input
                type='text'
                id='country'
                name='country'
                placeholder='The Country'
                required
                value={form.country || ''}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='town'>TOWN/CITY</label>
              <input
                type='text'
                id='town'
                name='town'
                placeholder='Town (or City)'
                required
                value={form.town || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          <input type='submit' value='Submit for Review →' />
        </form>
      </div>
    </div>
  )
}

export default Modal
