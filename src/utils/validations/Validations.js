export const checkValidateData = (email, password) => {
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (email === "") return "Please Enter your email";
    if (password === "") return "Please Enter Your Password";
    if (!isValidEmail) return "Please enter a valid email !!";
    if (!isPasswordValid) return "please Enter a valid password";
    return null
}