import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]= useState('')
  const [isError,setIsError] = useState(false)

  return (
  <>
   <h1>{text || 'hey'}</h1>
  <button className='btn' onClick={() => setIsError((s)=> !s)} >toggle error</button>
  {!isError && <h1>Merhaba</h1>}
  {isError ? <h1>Hata var</h1> : <h2>ufak tefek şeyler:D</h2>}

  </>)

  
};

export default ShortCircuit;
