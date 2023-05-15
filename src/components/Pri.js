import PropTypes from 'prop-types';
function pri(props) {
 
    return (<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="class1 container-fluid vh-50 w-200" >
      <h1 className="navbar-brand fs-1 font-weight-bold" href="/">{props.name}</h1>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"  onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==='light'?"dark":"white"}`} 
  >{props.mode==="light"?"Night Node":"light mode"} </label>
</div>
      </div>
  
  </nav>
);
    
    

}
pri.propTypes={title:PropTypes.string
}
export default pri;