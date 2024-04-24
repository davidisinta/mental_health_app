import React, { createContext, useState, useContext } from 'react';

const HandContext = createContext(null);

export const useHand = () => useContext(HandContext);

export const HandProvider = ({ children }) => {
  const [whichHandRaised, setWhichHandRaised] = useState(0);
  console.log("Changed to ", whichHandRaised);
  return (
    <HandContext.Provider value={{ whichHandRaised, setWhichHandRaised }}>
      {children}
    </HandContext.Provider>
  );
};