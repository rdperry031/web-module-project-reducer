import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers'

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { ConsoleWriter } from 'istanbul-lib-report';
import { addOne, applyNumber, changeOperation, clearDisplay } from './actions'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  // const addOneHandler = () => {
  //   dispatch(addOne())
  // }

  const applyNumberHandler = (number) => {
    dispatch(applyNumber(number))
  }  

  const operationHandler = (operation) => {
    dispatch(changeOperation(operation))
  }

  const clearDisplayHandler = () => {
    dispatch(clearDisplay())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(1)}  value={1}/>
              <CalcButton onClick={() => applyNumberHandler(2)} value={2}/>
              <CalcButton onClick={() => applyNumberHandler(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(4)} value={4}/>
              <CalcButton onClick={() => applyNumberHandler(5)} value={5}/>
              <CalcButton onClick={() => applyNumberHandler(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => applyNumberHandler(7)} value={7}/>
              <CalcButton onClick={() => applyNumberHandler(8)} value={8}/>
              <CalcButton onClick={() => applyNumberHandler(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => operationHandler('+')} value={"+"}/>
              <CalcButton onClick={() => operationHandler('*')} value={"*"}/>
              <CalcButton onClick={() => operationHandler('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearDisplayHandler} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
