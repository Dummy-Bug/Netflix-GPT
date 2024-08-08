
export const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) === false) {
        return "Invalid email"
    }
};

export const isValidMobileNumber = (mobileNumber) => {

    const mobileNumberRegex = /^[0-9]{10}$/;
    if (mobileNumberRegex.test(mobileNumber) === false) {
        return "Invalid mobile number"
    }
};