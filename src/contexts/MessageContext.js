import { createContext, useState } from "react";

//create a context
const MessageContext = createContext();

const MessageProvider = (props) => {
  // Create state to hold data for passing to child components
  const [ message, setMessage ] = useState('test');

  return (
    <MessageContext.Provider value={{message, setMessage}}>
      { props.children }
    </MessageContext.Provider>
  )
}

export { MessageProvider, MessageContext as default };

