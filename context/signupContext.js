import { useState, createContext } from "react";

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        mobileNumber: '',
        otp: '',
        emailId: '',
        address: {
            line1: '',
            line2: '',
            city: '',
            district: '',
            state: '',
            country: '',
            pincode: ''
        },
        mpin: '',
        confirmMpin: '',
        class: '',
        board: '',
        medium: '',
        subject: '',
    });

    const clearSignUpData = () => {
        setSignUpData({
            name: '',
            mobileNumber: '',
            otp: '',
            emailId: '',
            address: {
                line1: '',
                line2: '',
                city: '',
                district: '',
                state: '',
                country: '',
                pincode: '',
            },
            mpin: '',
            confirmMpin: '',
            class: '',
            board: '',
            medium: '',
            subject: '',
        });
    };

    return (
        <SignUpContext.Provider value={{ signUpData, setSignUpData, clearSignUpData }} >
            {children}
        </SignUpContext.Provider>
    )
}
