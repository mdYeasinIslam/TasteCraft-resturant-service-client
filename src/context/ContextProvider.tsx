import { useEffect, useState } from "react"
import { ChildrenType } from "../Type/Types"
import { onAuthStateChanged, User,createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import auth from "../Firebase/firebase.init"
import AuthProvider from "./AuthContext"

export const ContextProvider = ({ children }: ChildrenType) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading,setLoading] = useState(true)

    const signUpAuth = (email: string, password: string):Promise<UserCredential>=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInAuth = (email: string, password: string):Promise<UserCredential>=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutAuth = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserAuth = (profile: object) => {
        setLoading(true)
        return updateProfile(auth.currentUser as User,profile)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
           const userInfo = currentUser as User
            setUser(userInfo)
            setLoading(false)
        })
        return ()=> unSubscribe()
    },[])
    console.log(user)
    const info = {
        user,
        loading,
        signUpAuth,
        signInAuth,
        signOutAuth,
        updateUserAuth
    }
  return (
      <AuthProvider.Provider value={info}>
          {children}
    </AuthProvider.Provider>
  )
}
