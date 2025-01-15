import { MenuType } from "../../../Type/Types"

type Prop = {
    item : MenuType
}
export const DisplayMenu = ({item}:Prop) => {
    const {image,name,price,recipe,category} = item
  return (
    <div className="flex gap-x-5 justify-end">
        <figure className="  ">
            <img src={image} className="w-24 rounded-tr-3xl rounded-bl-3xl" alt="" />
        </figure>
        <div className=" w-full">
            <h1 className="text-xl font-serif text-gray-700">{name}----------</h1>
            <p className="text-gray-600">{category}</p>
            <p className="text-gray-600">{recipe}</p>
        </div>
        <div className="">
            <p className="text-yellow-600">${price}</p>
        </div>
    </div>
  )
}
