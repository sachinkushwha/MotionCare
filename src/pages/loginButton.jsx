import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

let Loging = ({ children }) => {
    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
    const location = useLocation();

    useEffect(() => {

        if (!isLoading && !isAuthenticated && location.pathname === '/form') {
            loginWithRedirect();
        }
       
    }, [location, isLoading, isAuthenticated]);



    if (!isAuthenticated || isLoading) {
        return (<div style={{
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}>
            Loading...
        </div>
        )
    }
    return <>{children}</>;
};
export default Loging;