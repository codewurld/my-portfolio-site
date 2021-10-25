import { createContext, useReducer } from "react";

// useContext is better than useState when state is to be applied globally, otherwise state will have to be applied one by one in each component
export const ThemeContext = createContext();

// initial state is light mode
const INIT_STATE = { darkMode: false };

const themeReducer = (state, action) => {
    // if button is toggled, change state from or to darkmode
    switch (action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
}

// make toggle conditions available globally
// wrap in ThemeProvider component
// props.children are the components/pages with access to condition
// wrap whole App in ThemeProvider

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INIT_STATE)

    return (
        <ThemeProvider value={state, dispatch}>
            {props.children}
        </ThemeProvider>
    )
}