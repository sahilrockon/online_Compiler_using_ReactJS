import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import X from './components/Pri';
import Show from './components/show';
import React,{useState} from 'react';
 
function App() {
  const[col,setcol]=useState('white');
  const[mode,setmode]=useState('dark');
 const Toggl=()=>{
 if(mode==='primary'){
  setmode('dark');
  document.body.style.backgroundColor='gray';
  setcol("white");
 }else{
setmode('primary');
document.body.style.backgroundColor='white';
setcol('red');
 } 
 } 
  return (
     <>
    <X title="History" name="CoMpiler" mode={mode} toggleMode={Toggl} bg={col} />
    <Show mode={mode}/>
    </>
  );
}

export default App;
