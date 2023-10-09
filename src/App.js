import "./style.css"
import React from 'react'



const App = () => {
  return (
  <div>
    <div className="headingg"> <h1>Welcome To React Calculator</h1> </div>
    <div className="calculator-grid">
    <div className='output'>
    <div className='previous-operand'>2423543</div>
    <div className='current-operand'>35346346</div>
    </div>
    <button className='span-two'>AC</button>
    <button>DEL</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>-</button>
    <button>.</button>
    <button>0</button>
    <button className='span-two'>=</button>  
    </div>

    </div>
  )
}

export default App

