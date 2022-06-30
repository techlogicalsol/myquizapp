import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import Categories from './Categories'
import ErrorMessage from './ErrorMessage'

function Home({ name, setName, fetchQuestions }){

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const history = useHistory()

    const handleSubmit = () =>{
        if(!category || !difficulty || !name){
            setError(true)
            return;
        }
        else{
            setError(false)
            fetchQuestions(category, difficulty)
            history.push('/quiz')
        }
    }

    return(
        <>
            <div className="content">
                <div className="settings">
                    <span>Quiz Settings</span>
                    <img src='/img/quiz.svg' 
                    className="banner" alt="quiz"/>

                    <div className="setting_select">

                    {error && <ErrorMessage>Please Fill all the fields</ErrorMessage> }

                        <TextField 
                        style={{marginBottom: 25}}
                        label="Enter Your Name" 
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        
                        />

                        <TextField 
                        style={{marginBottom: 30}}
                        select
                        label="Select Category" 
                        variant="outlined"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                        >
                        
                        {Categories.map((cat)=>(

                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>

                        ))}                       
                        </TextField> 

                        <TextField
                        style={{marginBottom: 30}}
                        select
                        label="Select Difficulty"
                        value="difficulty"
                        onChange={(e)=> setDifficulty(e.target.value)}
                        variant="outlined"
                        
                        >
                            <MenuItem key="Easy" value="easy">
                                Easy
                            </MenuItem>

                            <MenuItem key="Medium" value="medium">
                                Medium
                            </MenuItem>

                            <MenuItem key="Hard" value="hard">
                                Hard
                            </MenuItem>
                            
                        </TextField>

                        <Button 
                        onClick={handleSubmit}
                        variant="contained" 
                        color="primary" size="large"
                        >
                            Start Quiz
                        </Button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home