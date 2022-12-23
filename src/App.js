import './App.css';
import Button from './componentes/Boton.js';
import Display from './componentes/Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  const [memory, setMemory] = useState('0');

  const PI = Math.PI;

  const updateInput = (newInput) => {
    setInput(input + newInput);
  }

  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    }
  }

  const memoryStorage = () =>{
    setMemory(input);
    setInput('');
  }

  const funcMath = (funct) =>{
    
    if(funct === 'squareRoot'){
      let result = Math.sqrt(input);
      result = checkDecimals(result);
      setInput(result)
    }
    if(funct === 'nthRoot'){
      console.log('Coming Soon');
      setInput('Syntax ERROR');
    }
    if(funct === 'sin'){
      let result = Math.sin(input*PI/180);
      result = checkDecimals(result);
      setInput(result);
    }
    if(funct === 'cos'){
      let result = Math.cos(input*PI/180);
      result = checkDecimals(result);
      setInput(result);
    }
    if(funct === 'tg'){
      let result = Math.tan(input*PI/180);
      result = checkDecimals(result);
      setInput(result);
    }
    if(funct === 'cube'){
      let result = Math.pow(input,3);
      result = checkDecimals(result);
      setInput(result);
    }
    if(funct === 'cubeRoot'){
      let result = Math.cbrt(input);
      result = checkDecimals(result);
      setInput(result);
    }
    if(funct === 'nthPower'){
      console.log('Coming Soon');
      setInput('Syntax ERROR');
    }
    if(funct === 'ln'){
      let result = Math.log(input);
      result = checkDecimals(result);
      setInput(result);
    }
    if(funct === 'log'){
      let result = Math.log10(input);
      result = checkDecimals(result);
      setInput(result);
    }
    if (funct === 'e'){
      let result = Math.pow(Math.E,input);
      result = checkDecimals(result);
      setInput(result);
    }
    // updateInput()
  }

  const checkDecimals = (num) =>{
    if (!Number.isInteger(num)){
      return num.toFixed(5);
    }else{
      return(num);
    }
  }

  return (
    <div className='App'>
      <div className='calculator'>
        <Display
          input={input}
        />
        <div className='row'>
          <Button
            class='operator'
            clickFunc={updateInput}
            symbolButton = '('
          >{'('}
          </Button>
          <Button 
            class='operator'
            clickFunc={updateInput}
            symbolButton = ')'
          >{')'}
          </Button>
          <Button 
            class='operator'
            clickFunc={updateInput}
            symbolButton = '!'
          >{'x!'}
          </Button>
          <Button
            class='operator'
            clickFunc={updateInput}
            symbolButton = '^2'
          >{'x²'}</Button>
          <Button 
            class='operator'
            operation = 'squareRoot'
            clickFunc={funcMath}
          >{'√'}</Button>
          <Button 
            class='operator'
            operation = 'nthRoot' 
            clickFunc={funcMath}
          >{'ⁿ√'}</Button>
        </div>
        <div className='row'>
          <Button 
            class='operator' 
            clickFunc={funcMath}
            operation = 'sin'
          >{'sin'}</Button>
          <Button 
            class='operator'
            clickFunc={funcMath}
            operation = 'cos'
          >{'cos'}</Button>
          <Button 
            class='operator'
            clickFunc={funcMath}
            operation = 'tg'
          >{'tg'}</Button>
          <Button 
            class='operator' 
            clickFunc={funcMath}
            operation = 'cube'
          >{'x³'}</Button>
          <Button 
            class='operator'
            clickFunc={funcMath}
            operation = 'cubeRoot' 
          >{'∛'}</Button>
          <Button
            class='operator'
            clickFunc={funcMath}
            operation = 'nthPower' 
          >{'xⁿ'}</Button>
        </div>
        <div className='row'>
          <Button 
            clickFunc={updateInput}
            symbolButton = '1'
          >1</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '2'
          >2</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '3'
          >3</Button>
          <Button
            class='operator'
            clickFunc={updateInput}
            symbolButton = '/'
          >{'÷'}</Button>
          <Button 
            class='operator'
            clickFunc={updateInput}
            symbolButton = '%'
          >{'%'}</Button>
          <Button
            class='operator' 
            clickFunc={funcMath}
            operation = 'ln' 
          >{'ln'}</Button>
        </div>
        <div className='row'>
          <Button 
            clickFunc={updateInput}
            symbolButton = '4'
          >4</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '5'
          >5</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '6'
          >6</Button>
          <Button 
            class='operator' 
            clickFunc={updateInput}
            symbolButton = '*'
          >{'×'}</Button>
          <Button 
            class='operator' 
            clickFunc={funcMath}
            operation = 'log' 
          >{'log'}</Button>
          <Button 
            class='operator' 
            clickFunc={funcMath}
            operation = 'e' 
            >{'e'}</Button>
        </div>
        <div className='row'>
          <Button 
            clickFunc={updateInput}
            symbolButton = '7'  
          >7</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '8'
          >8</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '9'
          >9</Button>
          <Button 
            class='operator'
            clickFunc={updateInput}
            symbolButton = '-'
          >{'-'}</Button>
          <Button 
            class='operator'
            clickFunc={updateInput}
            symbolButton = {memory}
          >{'MR'}</Button>
          <Button class='operator' clickFunc={memoryStorage}>{'MS'}</Button>
        </div>
        <div className='row'>
          <Button 
            clickFunc={updateInput}
            symbolButton = '.'
          >.</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = '0'  
          >0</Button>
          <Button 
            clickFunc={updateInput}
            symbolButton = {PI.toFixed(4)}  
          >π</Button>
          <Button
            class='operator'
            clickFunc={updateInput}
            symbolButton = '+'
          >{'+'}</Button>
          <Button class='operator' clickFunc={() => { setInput('') }}>{'C'}</Button>
          <Button class='equal' clickFunc={calculate}>{'='}</Button>
        
        </div>
      </div>
    </div>

    
  );
}

export default App;
