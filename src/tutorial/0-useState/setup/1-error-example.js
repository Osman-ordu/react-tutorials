import React from 'react'

const ErrorExample = () => {
  let title = 'rastgele başlık'
  const handleClick = () => {
    title = 'selam millet'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Başlığı Değiştir
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
