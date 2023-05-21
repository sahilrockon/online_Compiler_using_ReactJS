import React, { Component} from "react";
export default class sideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: localStorage.getItem('input')||``,
      output: ``,
      language_id:localStorage.getItem('language_Id')|| 2,
      user_input: ``,
    };
    this.state={
      fontstyle:'normal'
     }
    this.state={size:"40px"};
  }

settingfont=(event)=>{
this.setState({
 fontstyle:event.target.value 
});

}
handleChange=(event)=>{
this.size=event.target.value; 
}
clear=()=>{
  this.setState({input:""}); 
}


input = (event) => {
 
  event.preventDefault();

  this.setState({input: event.target.value });
  localStorage.setItem('input', event.target.value)

};


 
  userInput = (event) => {
    event.preventDefault();
    this.setState({ user_input: event.target.value });
  };
  language = (event) => {
   
    event.preventDefault();
   
    this.setState({ language_id: event.target.value });
    localStorage.setItem('language_Id',event.target.value)
   
  };

  submit = async (e) => {
    e.preventDefault();

    let outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";
    const response = await fetch(
        'https://judge0-ce.p.rapidapi.com/submissions?UTF-8_encoded=true&fields=*',
         {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'd57d32955emsh66bfadc4e13e31fp172c27jsnf4bb2483b1e0',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          },
        body: JSON.stringify({

          language_id: this.state.language_id,
          source_code: this.state.input,
          stdin: this.state.user_input,
        }),
      }
    );
    outputText.innerHTML += "Submission Created ...";
    const jsonResponse = await response.json();

    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": "f80bbc3fabmsh386b03900f4a603p1f18b0jsn11f62a3fd57f", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });

        jsonGetSolution = await getSolution.json();
      }
    }
    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);

      outputText.innerHTML = "";

      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = atob(jsonGetSolution.compile_output);

      outputText.innerHTML = "";

      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  render() {
 
    return (
      <>      
<div className=" container fluid  col-6 ml-4" style={{float:"left",width:"50%",left:"0px",
border:"solid black 3px",position:"fixed"
}} 
 >
<textarea   className={`source container fs-3 my-2 fst-${this.state.fontstyle} `}      required
              name="solution"
              id="source"
              onChange={this.input}
              
              value={this.state.input}
style={{backgroundColor:this.props.mode==='primary'?'white':'black',
color:this.props.mode==='primary'?'black':'white',fontSize:this.state.size,resize:"none",
height:"700px"}}
></textarea>

<button type="submit" id="button " className="btn btn-danger mx-3 float-end " onClick={this.submit}>Compile</button>
<button id="button" className="btn btn-danger  mx-3 float-end " onClick={this.state.clear} >Clear </button>
<ul className="te">
  <li className="sty">
<select className="bg-dark text-white fs-5 mx-4 my-1 form-control form-inline" value={this.state.size}  onChange={this.handleChange}>
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

<select className="bg-danger
text-white fs-5 mx-4 my-1 form-control form-inline mb-2 language" 
              value={this.state.language_id}
              onChange={this.language}
              id="tags"
          >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="62">Java</option>
              <option value="71">Python</option>
            </select>

</li>
<li className="sty">
<select className="bg-dark 
text-white fs-5 mx-4 my-1 form-control form-inline mb-2"  value={this.fontstyle} onChange={this.settingfont}>
  <option >Fonts</option>
  <option className="fst-italic" value="italic" >italic</option>
  <option className="fst-bold" value="bold">Bold</option>
  <option className="fst-light"  value="normal">Light</option>
</select>

</li>
</ul>;
<div className=" my-3" 
style={{width:"100%",border:"solid black 4px" ,float:"left",height:"300px",left:"0px"}}
>
<h1 className="text-danger">Input: </h1>
<textarea  id="input"  className="fs-3"    onChange={this.userInput} style={{height:"240px",width:"100%"}}></textarea>
</div>
</div>
<div className=" my-3 float-end" 
style={{width:"40%",border:"solid black 4px" ,float:"left",height:"1200px"}}
>
<h1 className="text-danger" > Output</h1>
<br/>
<h1 id="output" className="fs-3"> </h1>
</div>
     
          
      
      </>
    );
  }
}