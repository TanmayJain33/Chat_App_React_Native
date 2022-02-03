import React, {createContext, useReducer} from 'react';
import loaderReducer from './reducer';
import initialState from './initialState';

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [loaderState, loaderDispatch] = useReducer(loaderReducer, initialState);

  return (
    <GlobalContext.Provider value={{loaderState, loaderDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}
