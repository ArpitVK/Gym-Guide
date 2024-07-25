

export default function Button(props) {
    const {text, func} = props 
  return (
      <button onClick={func} className="px-8 mx-auto py-4 rounded-md border-blue-400 border-[2px] border-solid bg-slate-950 blueShadow duration-200"><p>{text}</p></button>

  )
}
