import Btn from "./Components/Buttons/Btn";
import Display from "./Components/Display/Display";
import './App.css';

function App() {
 
  const btn=['9','8','C','7','6','/','5','4','*','3','2','+','1','0','-','.','='];

  function btnClicked(event){
    // console.log(event);
    console.log(`clicked ${event.target.textContent}`);
  }

  return (
    <>
      <div className='Calculator'>
          <Display></Display>
          <Btn element={btn} handleOnClick={btnClicked}></Btn>
      </div>
    </>
  )
}

export default App
