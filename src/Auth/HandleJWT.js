export const tokenKey = 'InvestmentAuth';
// const expirationKy = 'token-expiration';

export function saveToken(authData) {
    localStorage.setItem(tokenKey, JSON.stringify(authData));
    //  localStorage.setItem(expirationKy, authData.expiration.toString());
}

export function getClaims() {
    const token = JSON.parse(localStorage.getItem(tokenKey));
    if (!token) {
        return [];
    }
    // const expiration = localStorage.get(expirationKy)!;
    const expirationDate = new Date(token?.expiration);
    if (expirationDate <= new Date()) {
        logOut()
        return []; //token has expired
    }
    // const dataToken = JSON.parse(atob(token.split('.')[1]));
    // const response = [];
    // for (const property in dataToken) {
    //     response.push({ name: property, value: dataToken[property] });
    // }

    // return response;
}

export function expiredToken() {
    const token = JSON.parse(localStorage.getItem(tokenKey));
    // if (!token) {
    //     return [];
    // }
    const expirationDate = new Date(token?.expiration);
    if (token) {
        if (expirationDate <= new Date()) {
            logOut()
            // window.alert("session expired")
            //return []; //token has expired
        }
    }

    //localStorage.removeItem(expirationKy);
}

export function logOut() {
    localStorage.removeItem(tokenKey);
    // window.alert("successfully logged out")

    window.location.reload()
    //localStorage.removeItem(expirationKy);
}

export function getToken() {
    let tok;
    if (localStorage.getItem(tokenKey) === null) {
        tok = [];
    } else {
        tok = JSON.parse(localStorage.getItem(tokenKey));
    }
    return tok;
}