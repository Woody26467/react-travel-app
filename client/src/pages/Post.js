import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../components/Modal'
import axios from 'axios'

const Post = () => {
  const [mode, setMode] = useState(null)
  const [post, setPost] = useState(null)

  const { id } = useParams()

  console.log(id)

  const fetchData = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:8000/posts/${id}`
    )
    setPost(response.data)
  }, [id])

  console.log(post)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='post-page'>
      <div className='post-page-container'>
        <div className='info-container'>
          <div className='title-container'>
            <h1>{post?.data.title}</h1>
            <h4>{post?.data.description}</h4>
            <p>
              {post?.data.address.region},{' '}
              {post?.data.address.country}, {post?.data.website}
            </p>
          </div>
          <div className='button-container'>
            <button>X</button>
            <button onClick={() => setMode('edit')}>✎</button>
          </div>
        </div>

        <div className='image-container'>
          {/* <Map/> */}
          <img src={post?.data.photo} alt={`${post?.data.title}`} />
        </div>

        {mode && (
          <Modal
            mode={mode}
            setMode={setMode}
            currentPost={post}
            fetchData={fetchData}
          />
        )}
      </div>
    </div>
  )
}

export default Post
