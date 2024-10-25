import React, { useState, useContext } from 'react'
import ChildComp from './ChildComp'
import MessageContext from '../contexts/MessageContext';

const ParentComp = () => {

  const obj = useContext( MessageContext );

  return (
    <div>
      Parent: {obj.message}
      <ChildComp />
    </div>
  )
}

export default ParentComp;
