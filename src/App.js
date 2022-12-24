import './App.css';
import Boton from './componentes/Boton.js';
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
          <Boton
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '('
          >{'('}
          </Boton>
          <Boton 
            class='operator'
            clickFunc={updateInput}
            symbolBoton = ')'
          >{')'}
          </Boton>
          <Boton 
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '!'
          >{'x!'}
          </Boton>
          <Boton
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '^2'
          >{'x²'}</Boton>
          <Boton 
            class='operator'
            operation = 'squareRoot'
            clickFunc={funcMath}
          >{'√'}</Boton>
          <Boton 
            class='operator'
            operation = 'nthRoot' 
            clickFunc={funcMath}
          >{'ⁿ√'}</Boton>
        </div>
        <div className='row'>
          <Boton 
            class='operator' 
            clickFunc={funcMath}
            operation = 'sin'
          >{'sin'}</Boton>
          <Boton 
            class='operator'
            clickFunc={funcMath}
            operation = 'cos'
          >{'cos'}</Boton>
          <Boton 
            class='operator'
            clickFunc={funcMath}
            operation = 'tg'
          >{'tg'}</Boton>
          <Boton 
            class='operator' 
            clickFunc={funcMath}
            operation = 'cube'
          >{'x³'}</Boton>
          <Boton 
            class='operator'
            clickFunc={funcMath}
            operation = 'cubeRoot' 
          >{'∛'}</Boton>
          <Boton
            class='operator'
            clickFunc={funcMath}
            operation = 'nthPower' 
          >{'xⁿ'}</Boton>
        </div>
        <div className='row'>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '1'
          >1</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '2'
          >2</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '3'
          >3</Boton>
          <Boton
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '/'
          >{'÷'}</Boton>
          <Boton 
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '%'
          >{'%'}</Boton>
          <Boton
            class='operator' 
            clickFunc={funcMath}
            operation = 'ln' 
          >{'ln'}</Boton>
        </div>
        <div className='row'>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '4'
          >4</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '5'
          >5</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '6'
          >6</Boton>
          <Boton 
            class='operator' 
            clickFunc={updateInput}
            symbolBoton = '*'
          >{'×'}</Boton>
          <Boton 
            class='operator' 
            clickFunc={funcMath}
            operation = 'log' 
          >{'log'}</Boton>
          <Boton 
            class='operator' 
            clickFunc={funcMath}
            operation = 'e' 
            >{'e'}</Boton>
        </div>
        <div className='row'>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '7'  
          >7</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '8'
          >8</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '9'
          >9</Boton>
          <Boton 
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '-'
          >{'-'}</Boton>
          <Boton 
            class='operator'
            clickFunc={updateInput}
            symbolBoton = {memory}
          >{'MR'}</Boton>
          <Boton class='operator' clickFunc={memoryStorage}>{'MS'}</Boton>
        </div>
        <div className='row'>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '.'
          >.</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = '0'  
          >0</Boton>
          <Boton 
            clickFunc={updateInput}
            symbolBoton = {PI.toFixed(4)}  
          >π</Boton>
          <Boton
            class='operator'
            clickFunc={updateInput}
            symbolBoton = '+'
          >{'+'}</Boton>
          <Boton class='operator' clickFunc={() => { setInput('') }}>{'C'}</Boton>
          <Boton class='equal' clickFunc={calculate}>{'='}</Boton>
        
        </div>
      </div>
    </div>

    
  );
}

export default App;
