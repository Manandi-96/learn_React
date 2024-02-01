import React from 'react';
import ReactDOM from 'react-dom';
import selenaImage from './images/dream self.jpg';



const userStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding:'50px'
};

const imageStyle = {
  height: '100px', // Set your desired height
  width: '100px', // Set your desired width
  borderRadius: '50%',

};

const user = (
  <div style={userStyle}>
    <img src={selenaImage} alt='img of selena' style={imageStyle} />
    <h1>Manandi Anupama</h1>
    <p>Junior developer, Sri Lanka</p>
    <h3>Skills</h3>
  </div>
);

const buttonStyle={
  backgroundColor: '#61DBFB',
  padding:'10px',
  borderRadius:'5px',
  margin:'10px'

}
const languagesStyle={
  padding:'50px',
}
const languages=(
  <div style={languagesStyle}>
  <button style={buttonStyle}>css</button>
  <button style={buttonStyle}>html</button>
  <button style={buttonStyle}>java</button>
  <button style={buttonStyle}>Bootstrap</button>
  <button style={buttonStyle}>Javascript</button>
  <button style={buttonStyle}>typeScript</button>
  <button style={buttonStyle}>.Net</button>
  <button style={buttonStyle}>Python</button>
</div>
  
)
const app = (
  <div >
    {user}
   {languages}
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
