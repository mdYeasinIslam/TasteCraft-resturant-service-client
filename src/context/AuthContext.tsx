import { createContext } from "react";
import { ContextType } from "../Type/Types";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = createContext<ContextType | null>(null)

export const googleProvider = new GoogleAuthProvider()


export default AuthProvider