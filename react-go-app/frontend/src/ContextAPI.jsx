import React, { createContext, useState } from "react";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [quote, setQuote] = useState(() => {});

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={{ quote, setQuote }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
