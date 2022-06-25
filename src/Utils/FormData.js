export function registerFormData(registerData) {
    const formData = new FormData();
    formData.append('firstName', registerData.firstName);
    formData.append('lastName', registerData.lastName);
    formData.append('picture', registerData.picture);
    formData.append('gender', registerData.gender);
    formData.append('address', registerData.address);
    formData.append('dateOfBirth', registerData.dateOfBirth);
    formData.append('email', registerData.email);
    formData.append('phoneNo', registerData.phoneNo);
    formData.append('password', registerData.password);
    formData.append('confirmPassword', registerData.confirmPassword);
    return formData;
}

export function depositFormData(depositData) {
    const formData = new FormData();
    formData.append('coin', depositData.coin);
    formData.append('amountDeposited', depositData.amountDeposited);
    formData.append('picture', depositData.picture);
    return formData;
}

export function updateProfileFormData(registerData) {
    const formData = new FormData();
    if(registerData.firstName){
        formData.append('firstName', registerData.firstName);
    }
    if(registerData.lastName){
        formData.append('lastName', registerData.lastName);
    }
    if(registerData.picture){
        formData.append('picture', registerData.picture);
    }
    if(registerData.gender){
        formData.append('gender', registerData.gender);
    }
    if(registerData.dateOfBirth){
        formData.append('dateOfBirth', registerData.dateOfBirth);
    }
    if(registerData.phoneNo){
        formData.append('phoneNo', registerData.phoneNo);
    }
    return formData;
}