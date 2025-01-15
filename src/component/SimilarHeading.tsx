type Prop ={
    heading:string
    text:string
    style ?:boolean
}
export const SimilarHeading = ({heading,text,style}:Prop) => {
  return (
  <header className='text-center'>
            <h1 className='text-yellow-500 italic'>{heading}</h1>
            <hr className='w-1/4 mx-auto'/>
            <p className={`uppercase text-3xl py-4 ${style && 'text-white'}`}>{text}</p>
            <hr className='w-1/4 mx-auto'/>
        </header>
  )
}
