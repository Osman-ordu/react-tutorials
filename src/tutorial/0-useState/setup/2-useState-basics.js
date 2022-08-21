import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const değer = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(değer, handler)
  const [text, setText] = useState('rastgele başlık')
  const handleClick = () => {
    if (text === 'rastgele başlık') {
      setText('selam millet')
    } else {
      setText('rastgele başlık')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Başlığı Değiştir
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
