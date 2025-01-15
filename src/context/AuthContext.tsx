import { createContext } from "react";
import { ContextType } from "../Type/Types";

 const AuthProvider = createContext<ContextType | null>(null)
export default AuthProvider