import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

//https://opentdb.com/api_config.php


function App() {

  const [name, setName] = useState("")
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async (category = "", difficulty = "")=>{
    const {data} = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    
    );
   // console.log(data)
   setQuestions(data.results)

  }


  return (

    <BrowserRouter>
    <div className="app" 
    style={{backgroundImage: "url(./img/back.jpg)"}}>

      <Header />

      <Switch>

        <Route path="/" exact>
          <Home 
            name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions}/>
        </Route>

        <Route path="/quiz" exact>
          <Quiz 
            name={name}
            questions={questions}
            setQuestions={setQuestions}
            score={score}
            setScore={setScore}
          />
        </Route>

        <Route path="/result" exact>
          <Result 
            score={score}
            name={name}
          />
        </Route>

      </Switch>

    </div>

    <Footer />

    </BrowserRouter>
  );
}

export default App;
