import React from "react";
import "./survey.css";

export default function Survey() {
  let [step, setStep] = React.useState(0);
  const questions = [
    {
      title: 'Варианты 1',
      variants: ["1", "2", "3"],
      current: 2
    },
    {
      title: 'Варианты 2',
      variants: ["4", "5", "6"],
      current: 0
    },
    {
      title: 'Варианты 3',
      variants: ["7", "8", "9"],
      current: 0
    },
    {
      title: 'Варианты 4',
      variants: ["10", "11", "12"],
      current: 2
    },
    {
      title: 'Варианты 5',
      variants: ["13", "14", "15"],
      current: 1
    },
    {
      title: 'Варианты 6',
      variants: ["16", "17", "18"],
      current: 1
    },
    {
      title: 'Варианты 7',
      variants: ["19", "20", "21"],
      current: 0
    },
  ]
  const question = questions[step];
  let [pathPros, pathLine] = React.useState(0);
  let [currents, checkedCurrent] = React.useState(0);
  function StepBlock({question}) {

      const onClickVariant = (index) => {
        if (index === question.current) {
          checkedCurrent(currents = currents + 1);
        }
        if(pathPros < 100){
          pathLine(pathPros = pathPros + 100 / questions.length);
        }
        setStep(step + 1);
      }

      return(
        <>
          <div id="step">
            <h3>{question.title}</h3>
            {question.variants.map((text, index) => (<p onClick={() => {onClickVariant(index)}} key={text}>{text}</p>))}
          </div>
        </>
      )
  }

  function Result() {
    return(
      <>
        <div id="result">
          <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
          <p>Вы отгадали {currents} ответов  из {questions.length}</p>
          <button onClick={() => {setStep(step = 0); pathLine(pathPros = 0); checkedCurrent(currents = 0);}} >
            Попробовать заново
          </button>
        </div>
      </>
    )
  }


  return(
    <div id="survey">
      {step < questions.length ? <><div id="path"><div id="line" style={{width: pathPros + '%'}}></div></div><StepBlock question={question}/></> : <Result />}
    </div>
  )
}