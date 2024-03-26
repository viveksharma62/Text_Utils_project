import React from "react";
import { useState } from "react";

export default function TextForm(props){

const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upparcase!',"success");
    // document.title ="TextUtils - ToUpperCase Mode";

}
const handleDownClick = () =>{
    let newText1 = text.toLocaleLowerCase();
    setText(newText1);
    props.showAlert('Converted to lowercase!',"success");
    // document.title ="TextUtils - ToLowerCase Mode";


}

const handleClearClick = () =>{
    let newText1 = " ";
    setText(newText1);
    props.showAlert('clear the all text',"success");
    // document.title ="TextUtils - clear Mode";


}

const handleOnChange = (event) =>{
    setText(event.target.value);
    // document.title ="TextUtils - Write any thing Mode";

}
const handleCopy = () =>{
    // let text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert('Copy the all text',"success");
    // document.title ="TextUtils - Copy Mode";


}

const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('remove the extra space!',"success");
    // document.title ="TextUtils - remove space Mode";


}

const [text,setText] = useState('');

    return(
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnChange} placeholder="Enter Text here" style={{background: props.mode==='light'?'white':'#13466e' , color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleDownClick} >Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick} >Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces} >Removr ExtraSpaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}