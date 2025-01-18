import { createContext } from "react";
import { ContextType } from "../Type/Types";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthProvider = createContext<ContextType | null>(null)

export const googleProvider = new GoogleAuthProvider()
