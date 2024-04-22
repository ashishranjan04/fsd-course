import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewPost from './CreatePost'

function Home() {
    const [contents, setContent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/get')
        .then(result => setContent(result.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='home'>
        <h2>Blogs</h2>
        <div className='blog-section'>
        {
            contents.length === 0
            ?
            <div className='blog'><h4>No Blogs Posted Yet</h4></div>
            :
            <div className='blog'>
            <ul>
            {contents.map(content => (
            <li>
                <h3>{content.title}</h3>
                <p>{content.text}</p>
            </li>
            ))}
            </ul>
            </div>
        }
    </div>
        <NewPost/>
    </div>
  )
}

export default Home