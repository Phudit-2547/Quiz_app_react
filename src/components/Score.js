import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"


const Score = () => {
    const {score,setAppState,setscore} = useContext(DataContext)

    const restartApp=()=>{
        setscore(0) 
        setAppState("menu")
    } 
    return (
        <div className="score">
            <h1>Score Summary</h1>
            <h2>{score}/{QuestionsData.length}</h2>
            <button onClick={restartApp}>Redo Again</button>
        </div>
    )
}
export default Score