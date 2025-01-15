import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { ChildrenType } from "../Type/Types"
import { CircularProgress } from "@mui/material"

export const PrivateRoot = ({ children }: ChildrenType) => {
    const { user, loading } = useAuthContext()
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center pt-20"><CircularProgress className="" size="3rem" /></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/signIn'} state={{ pathname: location.pathname }} replace/>
}
