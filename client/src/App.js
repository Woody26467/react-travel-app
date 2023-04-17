import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Post from './pages/Post'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Dashboard />}></Route>
          <Route path={'/posts/:id'} element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
