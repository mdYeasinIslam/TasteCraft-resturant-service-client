import { Helmet } from "react-helmet-async"
type Prop = {
    title :string
}
export const UrlTitleName = ({title}:Prop) => {
  return (
        <Helmet>
              <title> {title} | TasteCraft</title>
      </Helmet>
   
  )
}
