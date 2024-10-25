import React, { useContext } from 'react';
import MessageContext from '../contexts/MessageContext';
import AnotherChildComp from '../components/AnotherChildComp';

const ChildComp = (props) => {

  const obj = useContext( MessageContext );

  return (
    <div>
      In Child Component: {obj.message}
      <AnotherChildComp />
    </div>
  );
};

export default ChildComp;
