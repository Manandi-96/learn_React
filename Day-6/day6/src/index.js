import React from 'react'
import ReactDOM from 'react-dom'

const numbers =[
  {num:0,color:'green'},
  {num:1,color:'yellow'},
  {num:2,color:'red'},
  {num:3,color:'red'},
  {num:4,color:'green'},
  {num:5,color:'red'},
  {num:6,color:'green'},
  {num:7,color:'red'},
  {num:8,color:'green'},
  {num:9,color:'yellow'},
  {num:10,color:'green'},
  {num:11,color:'red'},
  {num:12,color:'green'},
  {num:13,color:'red'},
  {num:14,color:'green'},
  {num:15,color:'yellow'},
  {num:16,color:'green'},
  {num:17,color:'red'},
  {num:18,color:'green'},
  {num:19,color:'yellow'},
  {num:20,color:'green'},
  {num:21,color:'yellow'},
  {num:22,color:'green'},
  {num:23,color:'yellow'},
  {num:24,color:'green'},
  {num:25,color:'yellow'},
  {num:26,color:'green'},
  {num:27,color:'yellow'},
  {num:28,color:'green'},
  {num:29,color:'red'},
  {num:30,color:'green'},
  {num:31,color:'red'},
]

const container={
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center'
}

const Number = ({ number }) => {
  const numberStyle = {
    backgroundColor: number.color,
    padding: '10px',
    borderRadius: '5px',
    color: 'white',

  };

  return (
    <div style={numberStyle}>
      <h1>{number.num}</h1>
    </div>
  );
};


const Numbers = ({ numbers }) => {
  const list={
    width:'80vw',
    display:'grid',
    gridTemplateColumns:'repeat(5,1fr)', 
    gap: '1px'
  }
  
  const numberList = numbers.map(number => <Number key={number.num} number={number} />);
  return <div style={list}>{numberList}</div>;
};


const App = () => {
 
  return (
    <div className='container' style={container}>
      <div>
        <h1>30 DAYS OF REACT</h1>
        <h3>Number Generator</h3>
        <ul >
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);