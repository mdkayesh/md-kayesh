import { useContext, createContext, useReducer } from "react";

const Context = createContext();

const initialValues = {
  loader: 0,
  container: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loader: action.progress };

    case "SCROLL_NAVBAR": {
      const container = action.container;

      return { ...state, container };
    }

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const isLoading = (progress) => {
    dispatch({ type: "LOADING", progress });
  };

  const isScrolling = (containerRef) => {
    dispatch({ type: "SCROLL_NAVBAR", container: containerRef.current });
  };

  return (
    <Context.Provider value={{ ...state, isLoading, isScrolling }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

// custom hook

export const useContextValues = () => {
  return useContext(Context);
};
