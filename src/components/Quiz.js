import {useState,useEffect,useContext} from "react" 
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Quiz= () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState("")
    const {score,setscore,setAppState} = useContext(DataContext)

    useEffect(()=>{ 
        checkanswer()
// eslint-disable-next-line
    },[selectedAnswers])
    
    const checkanswer=()=>{
        if(selectedAnswers!==""){
            if(selectedAnswers===QuestionsData[currentQuestion].answer){
                setscore(score+1)
                nextquestion()
            }
            else{
                nextquestion()
            }
        }
    }

    const nextquestion=()=>{ 
        setSelectedAnswers("") //reset selected answers if don't have this line you can't select the same answer again 
        if(currentQuestion === QuestionsData.length-1){
            setAppState("score")
        }
        else setCurrentQuestion(currentQuestion+1)
    }

    return (
        <div className="quiz">
            <h1>{QuestionsData[currentQuestion].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectedAnswers("A")}>{QuestionsData[currentQuestion].A}</button>
                <button onClick={()=>setSelectedAnswers("B")}>{QuestionsData[currentQuestion].B}</button>
                <button onClick={()=>setSelectedAnswers("C")}>{QuestionsData[currentQuestion].C}</button>
                <button onClick={()=>setSelectedAnswers("D")}>{QuestionsData[currentQuestion].D}</button>
            </div>
            <p>{`${currentQuestion+1}/${QuestionsData.length}`}</p>
        </div>
    )
}
export default Quiz