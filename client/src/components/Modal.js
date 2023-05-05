import { useState } from 'react'
import { getTags } from '../helpers'
import axios from 'axios'

const Modal = ({ mode, setMode, fetchData, currentPost }) => {
  console.log(currentPost)
  const [form, setForm] = useState({
    title: currentPost?.data.title || '',
    description: currentPost?.data.description || '',
    line: currentPost?.data.address.line || '',
    town: currentPost?.data.address.town || '',
    region: currentPost?.data.address.region || '',
    country: currentPost?.data.address.country || '',
    longitude: currentPost?.data.address.coords[0] || undefined,
    latitude: currentPost?.data.address.coords[1] || undefined,
    photo: currentPost?.data.photo || '',
    website: currentPost?.data.website || '',
    nature: currentPost?.data.tags.includes('nature') || false,
    mountains: currentPost?.data.tags.includes('mountains') || false,
    hiking: currentPost?.data.tags.includes('hiking') || false,
    beach: currentPost?.data.tags.includes('beach') || false,
    sun: currentPost?.data.tags.includes('sun') || false,
  })

  console.log(form)
  const createMode = mode === 'create'

  const handleSubmit = async e => {
    e.preventDefault()

    const data = {
      title: form.title,
      address: {
        line: form.line,
        town: form.town,
        region: form.region,
        country: form.country,
        coords: [Number(form.longitude), Number(form.latitude)],
      },
      photo: form.photo,
      website: form.website,
      description: form.description,
      tags: getTags(form),
    }

    try {
      if (createMode) {
        const response = await axios.post(
          'http://localhost:8000/create',
          {
            data,
          }
        )
        const success = response.status === 200

        if (success) {
          setMode(null)
          fetchData()
        } else {
          console.error(response)
        }
      } else {
        const response = await axios.put(
          `http://localhost:8000/edit/${currentPost.documentId}`,
          {
            data,
          }
        )
        const success = response.status === 200

        if (success) {
          setMode(null)
          fetchData()
        } else {
          console.error(response)
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = e => {
    const name = e.target.name
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    console.log(name + ':' + value)
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <form onSubmit={handleSubmit}>
          <div className='close-icon' onClick={() => setMode(null)}>
            X
          </div>
          <h1>{createMode ? 'Add' : 'Edit'} your adventure</h1>
          <h5>Upload a photo of where you have visited</h5>
          <p>Paste a url from the internet</p>

          <div className='multi-input'>
            <div className='image-preview'>
              {form.photo && (
                <img src={form.photo} alt='uploaded preview' />
              )}
            </div>

            <div className='main-inputs'>
              <div className='input-container'>
                <label htmlFor='photo'>PHOTO</label>
                <input
                  type='text'
                  id='photo'
                  name='photo'
                  placeholder='Photo URL goes here'
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
                  placeholder='title of your post'
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
                  placeholder='website goes here'
                  required
                  value={form.website || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
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
          <div className='multi-input'>
            <div className='input-container'>
              <label htmlFor='longitude'>LONGITUDE</label>
              <input
                type='number'
                id='longitude'
                name='longitude'
                required
                value={form.longitude || ''}
                onChange={handleChange}
              />
            </div>

            <div className='input-container'>
              <label htmlFor='latitude'>LATITUDE</label>
              <input
                type='number'
                id='latitude'
                name='latitude'
                required
                value={form.latitude || ''}
                onChange={handleChange}
              />
            </div>

            <div className='input-container'>
              <label htmlFor='region'>REGION</label>
              <input
                type='text'
                id='region'
                name='region'
                required
                value={form.region || ''}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='multi-input'>
            <div className='input-container'>
              <label htmlFor='nature'>Nature</label>
              <input
                type='checkbox'
                id='nature-checkbox'
                name='nature'
                checked={form.nature}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='mountains'>Mountains</label>
              <input
                type='checkbox'
                id='mountains-checkbox'
                name='mountains'
                checked={form.mountains}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='hiking'>Hiking</label>
              <input
                type='checkbox'
                id='hiking-checkbox'
                name='hiking'
                checked={form.hiking}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='beach'>Beach</label>
              <input
                type='checkbox'
                id='beach-checkbox'
                name='beach'
                checked={form.beach}
                onChange={handleChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='sun'>Sun</label>
              <input
                type='checkbox'
                id='sun-checkbox'
                name='sun'
                checked={form.sun}
                onChange={handleChange}
              />
            </div>
          </div>

          <br />

          <input type='submit' value='Submit for Review →' />
        </form>
      </div>
    </div>
  )
}

export default Modal
