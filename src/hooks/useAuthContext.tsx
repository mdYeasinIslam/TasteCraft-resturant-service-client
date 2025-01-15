import { useContext } from "react"
import { ContextType } from "../Type/Types"
import AuthProvider from "../context/AuthContext"
export const useAuthContext = () => {
const context = useContext(AuthProvider) as ContextType
    return context
}
