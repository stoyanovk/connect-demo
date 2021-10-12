import { useReducer, createContext, useContext, useMemo } from "react";
const initialState = {
  count: 0,
  usersList: [],
  user: null
};
const actions = {
  inceCount(state) {
    return { ...state, count: state.count + 1 };
  },
  setUsersList(state, action) {
    return { ...state, usersList: action.payload.usersList };
  },
  setUser(state, action) {
    const selectedUser = state.usersList.find(
      (user) => user.id === action.payload.id
    );
    return { ...state, user: selectedUser };
  }
};

const reducer = (state, action) => {
  return actions[action.type] ? actions[action.type](state, action) : state;
};

const Context = createContext(null);

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export function connect(mapStateToProps) {
  return function (WrappedComponent) {
    return function () {
      const { dispatch, ...store } = useAppContext();
      const getStoreValue = () => {
        return mapStateToProps ? mapStateToProps(store) : store;
      };
      const state = getStoreValue();
      return useMemo(() => {
        return (
          <WrappedComponent {...this.props} {...state} dispatch={dispatch} />
        );
      }, [JSON.stringify(state)]);
    };
  };
}
