import React from 'react';
import ReactDOM from 'react-dom';
import html from './image/html.img.png';
import css from './image/css.img.jpg';
import JS from './image/js.img.jpg';



const exercise = {
    width:'90vw',
    display: 'flex',
    padding: '15px' , 
    justifyContent: 'center'
};

const style={
    padding:'1px',
    display: 'flex',
    justifyContent: 'center',
    alignItem:'center',
    margin:'10px'
}

const Exercise2 = () => (
    <div className='exercise2' style={exercise}>
        <img src={html} alt='html img' style={style} />
        <img src={css} alt='CSS img' style={style} />
        <img src={JS} alt='js img' style={style} />
    </div>
);

const exercise3={
    backgroundColor: '#C2E6F4',
    width:'90vw',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'10px',
    margin:'25px'
}

const input={
    display: 'flex',
    justifyContent: 'center',
    alignItem:'center',
}

const button ={
    width:'250px',
    backgroundColor:'#F3747C',
    borderRadius: '5px',
    padding:'10px',
    color: 'white',
    margin:'30px'
}

const Exercise3= ()=>(
    <div className='exercise1' style={exercise3}>
        <h1 style={style}> SUBSCRIBE</h1>
        <h3 style={style}> sign up with your email address to receive news and updates </h3>
            <div style={input}>
            <input name="myInput"   type='text' defaultValue="First Name" style={style}/>
            <input name="myInput" type='text' defaultValue="Last Name" style={style} />
            <input name="myInput"  type='email' defaultValue="email" style={style} />
            </div>
        <button style={button}> SUBSCRIBE</button>
    </div>
)

const App =()=>(
    <div>
        <Exercise2/>
        <Exercise3/>
    </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);