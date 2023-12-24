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

    const handleChange = () => {

    }

    return (
        <SignUpContext.Provider value={{ signUpData, setSignUpData }} >
            {children}
        </SignUpContext.Provider>
    )
}
