import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export const UseSignUpAuth = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        throw error;
    }
}

export const UseSignIn = async (email, password) => {
    try {
        const userSignIn = await signInWithEmailAndPassword(auth, email, password)
        const signIn = userSignIn.user
        return signIn
    } catch (error) {
        throw error;
    }
}
