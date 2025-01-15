import { User, UserCredential } from "firebase/auth"
export type ContextType = {
      user: User | null
      loading:boolean
      signUpAuth: (email: string, password: string) => Promise<UserCredential>
      signInAuth: (email: string, password: string) => Promise<UserCredential>
      signOutAuth: () => Promise<void>
      updateUserAuth: (profile: object) => Promise<void>


}
export type ChildrenType = {
      children : JSX.Element
}
export type MenuType ={
 _id:string
       name:string
       recipe:string
       image:string
       category:string
       price:number
}

export type ReviewType = {
 _id:string
       name:string
       details:string
        rating:number
}

