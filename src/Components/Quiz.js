import React, { useEffect, useState } from "react";
import { CircularProgress } from '@material-ui/core'
import Question from "./Question";

function Quiz({name, score, setScore, questions, setQuestions}){


    // whenever the component will be rendered first time it is
    // going to be called in useEffect, whatever the variable you
    // you declare on dependecy part, it keeps changing whenever 
    // variable re-render 

    const [options, setOptions] = useState()
    const [currQues, setCurrQues] = useState(0)

    useEffect(()=>{
        console.log(questions)

        setOptions(questions && handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers, 
        
        ]))

    },[questions, currQues])

    
    const handleShuffle = (optionss) =>{
        return optionss.sort(()=> Math.random() - 0.5);
    }

    console.log(options)



    return(
        
        <div className="quiz">
            <span className="subTitle">Welcome, {name}</span>
            {/* <span>{questions[currQues].category}</span> */}

            { questions? (
            <>
            <div className="quizInfo">
                
                <span>Score: {score}</span>
            </div> 


            <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
            />
            
            </>
            ): (
            <CircularProgress 
            style={{margin: 100}}
            size={150} 
            color="inherit"
            thickness={1}
            
            /> )}

        </div>
    )
}

export default Quiz