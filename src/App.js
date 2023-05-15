import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import X from './components/Pri';
import Show from './components/show';
import React,{useState} from 'react';
import SideBar from './components/sideNav';
 
function App() {
  const[mode,setmode]=useState('dark');
 const Toggl=()=>{
 if(mode==='primary'){
  setmode('dark');
  document.body.style.backgroundColor='gray';
 }else{
setmode('primary');
document.body.style.backgroundColor='white';

 } 
 } 
  return (
     <>


    <SideBar/>
    <X title="History" name="COMPLIER" mode={mode} toggleMode={Toggl} />
    <Show mode={mode}/>
    </>
  );
}

export default App;
