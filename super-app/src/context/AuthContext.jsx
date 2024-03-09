import React, { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const actionTypes = {
    UPDATE_USER: 'UPDATE_USER',
  };
  
  const AuthReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.UPDATE_USER:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };

export const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      dispatch({ type: actionTypes.UPDATE_USER, payload: parsedUserData });
    }
  }, []);

  const updateUser = (newUserData) => {
    dispatch({ type: actionTypes.UPDATE_USER, payload: newUserData });
    localStorage.setItem('user', JSON.stringify(newUserData));
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;