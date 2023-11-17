import { createContext, useEffect, useReducer } from 'react'

const INITIAL_STATE = {
    isLoading: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isError: null
};

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                isLoading: true,
                user: null,
                isError: null
            }
        case "LOGIN_SUCCESS":
            return {
                isLoading: false,
                user: action.payload,
                isError: null
            }
        case "LOGIN_FAIL":
            return {
                isLoading: false,
                user: null,
                isError: null
            }
        case "LOGIN_OUT":
            return {
                isLoading: false,
                user: null,
                isError: action.payload
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider value={{
            isLoading: state.isLoading,
            user: state.user,
            isError: state.isError,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}