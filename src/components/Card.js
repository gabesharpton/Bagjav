import React from 'react';
// import './App.css';
//import Cards from '../Cards';

function Card(props) {
  return (
    <div className="App">
     <h1> {props.value}</h1>
    </div>
  );
}

export default Card;