import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Dashboard = () => {
  const posts = [
    {
      id: 0,
      title: 'Lofoten Islands',
      address: {
        line: 'House 45',
        town: 'Flakstad',
        region: 'Lofoten',
        country: 'Norway',
        coords: [13.61514, 68.148995],
      },
      photo:
        'https://www.fjordtravel.no/wp-content/uploads/2019/01/Amazing-Lofoten-Islands-by-Shutterstock-Hurtigruten.jpg',
      website: 'https://www.fjordtravel.no',
      description: 'Amazing Lofoten Islands',
      tags: ['nature', 'hiking', 'mountains'],
    },
  ]
  return (
    <div className='app'>
      <div className='dashboard'>
        <div className='dashboard-info-container'>
          <div>
            <h1>Adventure anywhere</h1>
            <p>Keep calm & travel on</p>
          </div>
          <button>Add your adventure</button>
        </div>
        <div className='posts-container'>
          {posts?.map((post, _index) => (
            <Link to={`/posts/${post.id}`} id='link' key={post.id}>
              <Card post={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
