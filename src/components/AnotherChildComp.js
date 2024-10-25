import React, { useContext } from 'react';
import MessageContext from '../contexts/MessageContext';

const AnotherChildComp = (props) => {

  const obj = useContext( MessageContext );

  return (
    <>
      <h1>In AnotherChildComponent: {obj.message}</h1>
      <button onClick={()=> obj.setMessage('updated')}>
        Update Message in Context
      </button>
    </>
  )
}

export default AnotherChildComp;

