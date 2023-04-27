import { useState } from 'react'

const Modal = ({ mode }) => {
  console.log(mode)
  const [form, setForm] = useState({
    line: '',
  })

  console.log(form)
  const createMode = true
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = () => {}

  return (
    <div className='overlay'>
      <div className='modal'>
        <form onSubmit={handleSubmit} action=''>
          <div className='close-icon'></div>
          <h1>{createMode ? 'Add' : 'Edit'} your adventure</h1>
          <h5>Upload a photo of where you have visited</h5>
          <p>Paste a url from the internet</p>
          <div className='multi-input'>
            <div className='input-container'>
              <label htmlFor='line'>FIRST LINE</label>
              <input
                type='text'
                id='line'
                placeholder='First Line of Address'
                required
                name='line'
                value={''}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'></div>
            <div className='input-container'></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
