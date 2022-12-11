import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
    const state = useContext(AuthStateContext)

    if (!state) {
        throw Error(' state is undefined! ')
    }

    return state
}

export function useAuthDispatch() {
    const dispatch = useContext(AuthDispatchContext)

    if (!dispatch) {
        throw Error(' dispatch is undefined! ')
    }

    return dispatch
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}