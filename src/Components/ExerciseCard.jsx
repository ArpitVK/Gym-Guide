import { useState } from "react"
import ReactPlayer from "react-player"

export default function ExerciseCard(props) {
  const [setsCompleted, setSetsCompleted] = useState(0)

  const handleSetsIncrement =()=>{
    setSetsCompleted((setsCompleted+1)%6)
  }
    const {exercise,i} = props
  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:items-center sm:flex-row sm:flex-wrap">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl mg:text-5xl font-semibold text-slate-400">0{i+1}</h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center ">{exercise.name.replaceAll('_',' ')}</h2>
        <p className="capitalize text-sm text-slate-400">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Groups</h3>
        <p className="capitalize">{exercise.muscles.join('&')}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded gap-2">
        {exercise.description.split('___').map((val,uniKey)=>{
          return(
            <div key={uniKey}className="text-sm">{val}</div>
          )
        })}
      </div>

      <div className="grid grids-col-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {
            ['reps', 'rest', 'tempo'].map((info)=>{
                return (
                    <div key={info} className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slat-900 w-full">
                        <h3 className="capitalize text-slate-400">{info ==='reps'? `${exercise.unit}`:info}</h3>
                        <p className="font-medium">{exercise[info]}</p>
                    </div>
                )
                
            })
        }

        <button onClick={handleSetsIncrement}
         className="flex flex-col rounded p-2 border-[1.5px] duration-200 border-solid border-blue-900 hover: border-blue-600 w-full duration-200">
            <h3 className="text-slate-400 text-sm capitalize">sets Completed</h3>
            <p className="font-medium">{setsCompleted}/5</p>
        </button>

      </div>
        {/* <label className="text-slate-400 text-md capitalize">Tutorial</label>
      <div className="px-10 py-5">
        <ReactPlayer className='' height='200px' weight='250px'url={exercise.url} controls={true} />
      </div> */}
    </div>
  )
}
