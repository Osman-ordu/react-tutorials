import React, { useState, useEffect } from 'react'
// varsayılan olarak her yeniden oluşturma işleminden sonra çalışır
// temizleme işlevi
// ikinci parametre
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('useEffect çağrıldı')
    if (value >= 1) {
      document.title = `Yeni mesajlar: (${value})`
    }
  }, [value])

  console.log('bileşen işlendi')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue((p) => p + 1)}>
        Tıklayın
      </button>
    </>
  )
}

export default UseEffectBasics
