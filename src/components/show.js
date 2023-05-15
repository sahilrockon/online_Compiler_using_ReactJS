import React,{useState} from "react";
export default function Show(props){
    const[size,setsize]=useState("20px"); 
    const[fontstyle,setstyle]=useState("normal");
    const[text,set]=useState("");

    const handleChange = (e) => {
      setsize(e.target.value);
      console.log(size);
    };    
    const settingfont=(event)=>{
      setstyle(event.target.value);
    }
    


    const callme=(event)=>{
        set(event.target.value);    
        }
    const clear=()=>{
      set('');  
    }    
   

return (<>
<div className="container float-end " style={{float:"left",width:"1600px"}}>
<textarea className={`container my-5 fst-${fontstyle} `} value={text}  rows="20" 
style={{backgroundColor:props.mode==='primary'?'white':'black',
color:props.mode==='primary'?'black':'white',fontSize:size,resize:"none"} } onChange={callme}></textarea>
<button id="button float-end" className="btn btn-danger  mx-3 float-end" onClick={clear} >Clear </button>
<ul className="te">
  <li className="sty">
<select className="bg-dark text-white fs-5 mx-4 my-1" value={size}  onChange={handleChange}>
  <option  >font-Size</option>
  <option value="8px">8px</option>
  <option value="12px">12px</option>
  <option value="14px">14px</option>
  <option value ="20px" >20px</option>
    <option value="24px">24px</option>
  <option value="30px">30px</option>
  <option value="35px">35px</option>
  <option value="40px">40px</option>
  <option value="45px">45px</option>

</select>
</li>
<li className="sty">
<select className="bg-dark 
text-white fs-5 mx-4 my-1"  value={fontstyle} onChange={settingfont}>
  <option >Fonts</option>
  <option className="fst-italic" value="italic" >italic</option>
  <option ClassName="fst-bold" value="bold">Bold</option>
  <option className="fst-light"  value="normal">Light</option>
</select>

</li>
</ul>;
</div>
</>
);


}