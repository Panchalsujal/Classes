import React, { useContext } from 'react'
import { userDataContext } from '../Context/UserContext'

const Home = () => {
const data= useContext(userDataContext)
    return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Home
