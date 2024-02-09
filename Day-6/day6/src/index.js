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

LEVEL 2-EX2

import React from 'react';
import ReactDOM from 'react-dom';

// creating a color
const generateHexColor = () => {
  const str = '0123456789abcdef';
  let color = '';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  return '#' + color;
};

// adding that color to an array
const ColorList = () => {
  const colors = [];

  for (let i = 0; i < 32; i++) {
    const hexaColor = generateHexColor();
    colors.push(hexaColor);
  }
  console.log(colors);
  return colors;
};

// display the list using map

const Colors = ({ colors }) => {
  const style = {
        display:'grid',
        gridTemplateColumns:'repeat(5,1fr)', 
        gap: '1px'
  };

  const colorList = colors.map((color, index) => (
    <div key={index} style={{ ...style, backgroundColor: color }}>
      <Color bgColor={color} />
    </div>
  ));
  console.log(colorList);
  return <div>{colorList}</div>;
};

// adding the background to the color component as same as the value of the color
const Color = ({ bgColor }) => {
  const numberStyle = {
    backgroundColor: bgColor,
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
  };

  return (
    <div style={numberStyle}>
      <h1>{bgColor}</h1>
    </div>
  );
};

const App = () => {
  const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', 
  };

  const colors = ColorList(); // defining colors variable here

  return (
    <div style={container}>
      <div>
        <h1>30 DAYS OF REACT</h1>
        <h3>Colors</h3>
        <ul>
          <Colors colors={colors} />
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);

// Question 2
import React from 'react';
import ReactDOM from 'react-dom';

// creating a color
const generateHexColor = () => {
  const str = '0123456789abcdef';
  let color = '';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    color += str[index];
  }

  return '#' + color;
};

// adding that color to an array
const ColorList = () => {
  const colors = [];

  for (let i = 0; i < 32; i++) {
    const hexaColor = generateHexColor();
    colors.push(hexaColor);
  }
  return colors;
};

// display the list using map

const Colors = ({ colors }) => {

  const colorList = colors.map((color, index) => (

    <div key={index} style={{ width: '150px', height: '150px',passing:'10px',margin:'5px', backgroundColor: color }}>
      <Color bgColor={color} />
    </div>
  ));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '1px' }}>
      {colorList}
    </div>
  );
};

// adding the background to the color component as same as the value of the color
const Color = ({ bgColor }) => {
  const numberStyle = {
    backgroundColor: bgColor,
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  };

  return (
    <div style={numberStyle}>
      <h1>{bgColor}</h1>
    </div>
  );
};

const App = () => {
  const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', 
  };

  const colors = ColorList(); // defining colors variable here

  return (
    <div style={container}>
      <div>
        <h1>30 DAYS OF REACT</h1>
        <h3>Colors</h3>
        <Colors colors={colors} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
