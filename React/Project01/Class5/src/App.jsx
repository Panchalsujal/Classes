import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()



    setAllUsers([...allUsers, { title, email }])

    setTitle('')
    setEmail('')
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter name'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

                <button>Submit</button>
      </form>

      {allUsers.map(function (elem, idx) {
        return <div key={idx}>
          <h4>{elem.title}</h4>
        </div>
      })}
    </div>
  )
}

export default App