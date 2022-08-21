import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age,setAge] = useState('')
  const [person,setPerson] = useState({name:'',email:'',age:''})
  const [people, setPeople] = useState([])


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (name && email) {
  //     console.log('formu gönder')
  //     const person = { id: new Date().getTime().toString(), name, email }
  //     console.log(person)
  //     setPeople((people) => {
  //       return [...people, person]
  //     })
  //     setName('')
  //     setEmail('')
  //   } else {
  //     console.log('boş değerler')
  //   }
  // }
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setPerson({...person,[name]: value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if(person.name && person.email && person.age ) {
    
    }

  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>Kişi ekle</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email } = person
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
