import React from 'react';
import MyPoems from "./MyPoems";
import {styleSheet} from "../styles";

const divStyle={
    background:styleSheet.background
}

export default function App() {
  return (
  <div style={divStyle}>
      <h1 style={{color:"white",fontSize:"5em",padding:"2em"}}>Welcome To My Page</h1>
      <MyPoems/>
      <footer style={{color:"white",fontSize:"4em",padding:"1em"}}>Thank You Visiting My Page!</footer>
      </div>
      );
}
