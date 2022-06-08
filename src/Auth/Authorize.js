import React, { useEffect, useState } from 'react';
import { tokenKey } from './HandleJWT';

export default function Authorize({ authorize, notAuthorized, roles }) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    // const { claims } = useContext(AuthenticationContext);
    const { role } = JSON.parse(localStorage.getItem(tokenKey) || '');
    useEffect(() => {
        if (role) {
            if (role === "Admin" && roles === role) {
                setIsAuthorized(true)
            }
            // const index = claims.findIndex(claim =>
            //     claim.name === "role" && claim.value === role)
            // setIsAuthorized(true)
        } else {
            setIsAuthorized(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])
    return (
        <>
            {isAuthorized ? authorize : notAuthorized}
        </>
    )
}
