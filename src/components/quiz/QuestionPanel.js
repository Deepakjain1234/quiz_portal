import React from 'react'
import "../Assets/CSS/portal.css"
import QuestionPallet from './QuestionPallet';
export default function QuestionPanel() {

var countDownDate = new Date("Oct 20, 2022 23:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = hours + ":" + minutes + ":" + seconds + " Left";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// const[questionNo,setQuestionNo]=useState(0);
  return (
    <>
    <div className='ark-time'>
      <div className="arksec-1">
      <h1 className='ark-head'>IPL Auction Quiz</h1>
      </div>
      <div className="arksec-2">
        <div className="arksec-21">
      <i className="fa-solid fa-triangle-exclamation ark-danger-icon"></i>
      <h3 className="ark-report">Report an issue</h3>
      </div>
      <div className="arksec-22">
    <i className="fa-regular fa-clock ark-icon"></i>
    <p id="demo" className='ark-timer'></p>
    <button className='ark-button-top'>Finish Test</button>
    </div>
    </div>
    </div>
    <div className="ark-question-box"><QuestionPallet/></div>
    
    </>
  )
}
