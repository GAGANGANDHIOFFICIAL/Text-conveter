import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("upper case was clcked "+text)
        setText(text.toUpperCase())
    //    console.log(count)
    }
    const handleloClick=()=>{
        // console.log("upper case was clcked "+text)
        setText(text.toLowerCase())
    //    console.log(count)
    }
    const handleOnChange=(event)=>{
        // console.log("onchange clicked ")
        setText(event.target.value)
        // setCount(count++);
        
        
    }
    const [text, setText] = useState("ENTER TEXT HERE ");
    // const [count, setCount] = useState(0);
    // TEXT="NEW TEXT";// WRONG WAY TO CHANGE THE STATE 
    // setText("NEW TEXT")// correct way to change the state 
  return (
    <>
    
<div className="mb-3 container my-3">
<h3>{props.heading}</h3>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text</label>
  <textarea className="form-control mb-3" value={text} onChange={handleOnChange}    id="exampleFormControlTextarea1" rows="10"></textarea>
  <hr class="border border-danger border-2 opacity-50"></hr>
  <button className="btn btn-primary my-6 mb-3" onClick={handleUpClick}     type="button">convert-to-upperCase</button>
  <hr class="border border-danger border-2 opacity-50"></hr>
  <button className="btn btn-primary my-6 " onClick={handleloClick}     type="button">convert-to-lowerCase</button>
  <hr class="border border-danger border-2 opacity-50"></hr>
</div>

<div className='container'>
    <h1>Your Text summary</h1>
    <p>Words size: {text.split(" ").length} and {text.length} characters</p>
</div>
    </>
  )
}
