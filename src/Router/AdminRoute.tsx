import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { ChildrenType } from "../Type/Types"
import { CircularProgress } from "@mui/material"
import { useIsAdmin } from "../hooks/useIsAdmin"
import toast from "react-hot-toast"

export const AdminRoute = ({ children }: ChildrenType) => {
    const { user, loading ,signOutAuth} = useAuthContext()
    const [isAdmin,isPending] =useIsAdmin()
    const location = useLocation()
    if (loading || isPending) {
        return <div className="flex justify-center pt-20"><CircularProgress className="" size="3rem" /></div>
    }
    if (user && isAdmin) {
        return children
    }
    else {
        signOutAuth()
            .then(() => {
            return <Navigate to={'/signIn'} state={{ pathname: location.pathname }} replace/>
            }).catch(e => {
                console.log(e)
                toast.error(e.message)
        })
    }
}