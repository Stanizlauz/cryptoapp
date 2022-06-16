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
