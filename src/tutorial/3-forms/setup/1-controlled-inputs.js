import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [people,setPeople] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(name && email) {
      const person = { id: new Date().getTime().toString(),name,email }
      setPeople(() => {
        return [...people,person]
      })
      setName('')
      setEmail('')
    } else{
      console.log('boş değerler')
    }
  }
  return(
    <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Name:</label>
          <input type="text"  id='name' name='name' placeholder='...'
          value={name}
          onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='form-control'>
          <label htmlFor="name">Email:</label>
          <input 
          type="Email"  id='Email' name='Email' placeholder='...'
          value={email}
          onChange={(event) => setEmail(event.target.value)} />
        </div>
        <button type='submit'>add person</button>
        {/* <button type='submit' onClick={handleSubmit}>add person</button> */}
      </form>
      {people.map((person) => {
        const {id,name,email} = person
        return(
          <div className='item' key={id}>
            <h4>{name}</h4>
            <hp>{email}</hp>
          </div>
        )
      }
      )}
    </article>
    </>
  )
};

export default ControlledInputs;
