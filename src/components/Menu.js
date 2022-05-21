import { useContext } from "react"
import { DataContext } from "../App"
const Menu =()=>{
    const{setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>Pretest Web Development</h1>
            <button onClick={()=>setAppState("quiz")}>Start Quiz</button>
        </div>
    )
}
export default Menu