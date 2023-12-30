import React from 'react';
import './App.css';
import Counts from "./modal/count";
import Survey from "./survey/survey";

function App() {

  const [open, setOpen] = React.useState(false);
  let [classes, chengeClass] = React.useState('');

  function openedModal(target) {
    if (target === 'open') {
      if(!open){
        setOpen(true);
        setTimeout(() => {
          chengeClass(classes = 'open')
        }, 30);
      }
    }
    if(target === 'close'){
      chengeClass(classes = '')
      setTimeout(() => {
        setOpen(false);
      }, 500);
    }
  }

  return (
    <>123
      <button onClick={()=>openedModal('open')} id='open-modal'>✨ Открыть окно</button>
      {
        open && (
          <div id='overlay' className={classes}>
            <div id='modal'>
              <svg onClick={()=> openedModal('close')} xmlns="http://www.w3.org/2000/svg" width="22px" height='22px' viewBox="0 0 30 30" stroke="black">
                  <line x1="2" y1="2" x2="28" y2="28" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="28" y1="2" x2="2" y2="28" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <Counts />
            </div>
          </div>
        )
      }
      <section>
        <Survey />
      </section>
    </>
  );
}

export default App;
