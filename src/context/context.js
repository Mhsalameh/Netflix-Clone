import React, { useState } from 'react';

export const Context = React.createContext();

export default function ContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const value = { page, setPage };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
