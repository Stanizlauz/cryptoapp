import React, {useEffect, useState } from 'react';
import { tokenKey } from './HandleJWT';

export default function Authorize({ authorize, notAuthorized, roles }) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    // const { claims } = useContext(AuthenticationContext);
    const auth = JSON.parse(localStorage.getItem(tokenKey));
    
    useEffect(() => {
        if (auth?.role) {
            if (auth?.role === "Admin" && roles ===auth?.role) {
                setIsAuthorized(true)
            }
            // const index = claims.findIndex(claim =>
            //     claim.name === "role" && claim.value === role)
            // setIsAuthorized(true)
        } else {
            setIsAuthorized(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth?.role])
    return (
        <>
            {isAuthorized ? authorize : notAuthorized}
        </>
    )
}
