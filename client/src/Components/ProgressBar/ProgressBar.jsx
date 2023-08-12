import "./ProgressBar.css";
export const ProgressBar=({progress})=>{
    return(
        <div className="progressbar">
            <div className="inner-progress" style={{height:"20px", width: `${progress}%`, backgroundColor: "purple"
            }}>

            </div>
        </div>
    )
}