import React,{useState} from 'react'
import "../Assets/CSS/portal.css"

export default function QuestionPallet() {

  const questionText = {
    totalResults: 8,
    questions: [
        {
          "question":"How many cases are there, which are used to compare various data structure's execution time in a relative manner?",
          "option1":"2",
          "option2":"3",
          "option3":"4",
          "option4":"5",
          "answer":"3"
        },
        {
          "question":"Which case of data structure operation takes maximum time?",
          "option1":"Worst Case",
          "option2":"Average Case",
          "option3":"Best Case",
          "option4":"None of the above",
          "answer":"Worst Case"
        },
        {
          "question":"What is true about Interface in data structure?",
          "option1":"Each data structure has an interface.",
          "option2":"Interface represents the set of operations that a data structure supports.",
          "option3":"An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.",
          "option4":"All of the above",
          "answer":"All of the above"
        },
        {
          "question":"What is true about Interface in data structure?",
          "option1":"Each data structure has an interface.",
          "option2":"Interface represents the set of operations that a data structure supports.",
          "option3":"An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.",
          "option4":"All of the above",
          "answer":"All of the above"
        },
        {
          "question":"What is true about Interface in data structure?",
          "option1":"Each data structure has an interface.",
          "option2":"Interface represents the set of operations that a data structure supports.",
          "option3":"An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.",
          "option4":"All of the above",
          "answer":"All of the above"
        },
        {
          "question":"What is true about Interface in data structure?",
          "option1":"Each data structure has an interface.",
          "option2":"Interface represents the set of operations that a data structure supports.",
          "option3":"An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.",
          "option4":"All of the above",
          "answer":"All of the above"
        },
        {
          "question":"What is true about Interface in data structure?",
          "option1":"Each data structure has an interface.",
          "option2":"Interface represents the set of operations that a data structure supports.",
          "option3":"An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.",
          "option4":"All of the above",
          "answer":"All of the above"
        },
        {
          "question":"What is true about Interface in data structure?",
          "option1":"Each data structure has an interface.",
          "option2":"Interface represents the set of operations that a data structure supports.",
          "option3":"An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.",
          "option4":"All of the above",
          "answer":"All of the above"
        }
    ]
  };
  const toggleDot1 = () => {
  document.getElementById("ark-icon-dot-1").classList.toggle("ark-dot");
  document.getElementById("ark-icon-dot-2").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-3").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-4").classList.remove("ark-dot");
  }
  const toggleDot2 = () => {
    document.getElementById("ark-icon-dot-1").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-2").classList.toggle("ark-dot");
  document.getElementById("ark-icon-dot-3").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-4").classList.remove("ark-dot");
  }
  const toggleDot3 = () => {
  document.getElementById("ark-icon-dot-1").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-2").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-3").classList.toggle("ark-dot");
  document.getElementById("ark-icon-dot-4").classList.remove("ark-dot");
  }
  const toggleDot4 = () => {
  document.getElementById("ark-icon-dot-1").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-2").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-3").classList.remove("ark-dot");
  document.getElementById("ark-icon-dot-4").classList.toggle("ark-dot");
  }
 
  const[questionNo,setquestionNo]=useState(0);
 
  const NextQuest = ()=>{
    if(questionNo<questionText.totalResults-1){
    setquestionNo((questionNo) => questionNo + 1);
  
  }
  }
  const PrevQuest = () =>{
    if(questionNo>0){
      setquestionNo((questionNo) => questionNo - 1);
     
    }
  }
 

  
  
 


  return (
    <>
    <div className='ark-questionTab'>
      <h1 className="ark-question-title">Qestion no: {questionNo+1}</h1>
      <hr className="ark-question-hr"/>
      <p className="ark-question">{questionText.questions[questionNo].question}</p>
      <div className="ark-options">
      <div className="ark-option-1">
        <i className="fa-regular fa-circle ark-option-icon" onClick={toggleDot1} ><div id="ark-icon-dot-1"></div></i>
        <p>{questionText.questions[questionNo].option1}</p></div>
      <div className="ark-option-2">
        <i className="fa-regular fa-circle ark-option-icon" onClick={toggleDot2}><div id="ark-icon-dot-2"></div></i>
        <p>{questionText.questions[questionNo].option2}</p></div>
      <div className="ark-option-3">
        <i className="fa-regular fa-circle ark-option-icon" onClick={toggleDot3}><div id="ark-icon-dot-3"></div></i>
        <p>{questionText.questions[questionNo].option3}</p></div>
      <div className="ark-option-4">
        <i className="fa-regular fa-circle ark-option-icon " onClick={toggleDot4}><div id="ark-icon-dot-4"></div></i>
        <p>{questionText.questions[questionNo].option4}</p></div>
      </div>
    </div>
    <div className="ark-bottom-sec">
     
      <p className='ark-bottom-button1'onClick={PrevQuest}><i className="fa-solid fa-angle-left"></i> Prev</p>
      <p className='ark-bottom-button2'><i className="fa-sharp fa-solid fa-bookmark ark-bottom-icon"></i> Mark For Review</p>
      <p className='ark-bottom-button3' onClick={NextQuest}>Submit & Next <i className="fa-solid fa-angle-right"></i></p>
      
    </div>
    </>
  )
}
