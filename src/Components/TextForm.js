import React, {useState} from 'react'

//const [text, setText] = useState("Enter text here");

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("handle upclick" + text);
       // let newText=text.toUpperCase;
       let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upppercase!","success");
    }

    const handleLoClick =()=>{
        console.log("handle upclick" + text);
       // let newText=text.toUpperCase;
       let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick =()=>{
        console.log("handle upclick" + text);
       // let newText=text.toUpperCase;
       let newText = '';
        setText(newText);
        props.showAlert("Cleared text!","success");
    }
    const handleReverseClick =()=>{
        console.log("handle upclick" + text);
       // let newText=text.toUpperCase;
       let newText = text.split("").reduce((rev, char)=>char+rev,'');
        setText(newText);
        props.showAlert("Text has been reversed!","success");
    }

    const handleOnChange =(event)=>{
        console.log("On Change");
       setText(event.target.value);
    }

    const wordCount = (count)=>{
        if(text.split("").length === 0) 
     return count = 0;
    else
      return count = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
    }


    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>     
       <div className="mb-3">
               {/* <label htmlFor="Mybox" className="form-label">Exampl</label> */}
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#111421':'white', color: props.mode==='dark'?'white':'black'}} placeholder='Enter your text here' onChange={handleOnChange} value = {text} id="Mybox" rows="3"></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert TO UpperCase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert TO LowerCase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick}>Reverse Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
       
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Summery</h1>
    <p>Number of words: {wordCount()} and Number of characters: {text.length}</p>
    <p>Time required to read {0.008 * wordCount()} Minutes</p>
    <h3>Privew</h3>
    <p>{text.length>0 ?text:'Nothing to preview . . '}</p>
    
    </div>
   
    </>
  )
}
