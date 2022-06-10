import React from 'react'

export function registerFormData({registerData}) {
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
