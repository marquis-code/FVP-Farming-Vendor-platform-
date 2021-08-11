import React, { useState, createContext, useEffect} from "react";

export const AuthContext = createContext(null);

const AuthenticationContext = (props) => {

    useEffect(function () {
        // console.log(window.localStorage);
        setExistingTokens(localStorage.getItem('token'))
        console.log(existingTokens);
    }, []);

 
const [existingTokens, setExistingTokens] = useState(null)

    const prevAuth = existingTokens
    const [authTokens, setAuthTokens] = useState(prevAuth);

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthenticationContext;
