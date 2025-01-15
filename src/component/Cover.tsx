type Prop = {
    img?: string
    title?: string
    text?:string
}
export const Cover = ({img,title,text}:Prop) => {
  return (
    <div
  className="hero min-h-screen mb-10"
  style={{
    backgroundImage: `url(${img})`,
  }}>
  <div className="hero-overlay bg-opacity-40 "></div>
  <div className="hero-content text-neutral-content text-center bg-slate-900 bg-opacity-40 w-3/5">
    <div className="max-w-md py-12">
        <h1 className="mb-5 text-5xl font-semibold font-serif">{ title}</h1>
      <p className="mb-5">
       {text}
      </p>
    </div>
  </div>
</div>
  )
}
