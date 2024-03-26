export default function About(props) {
    let mystyle = {
        color : props.mode ==='dark' ? 'white' : '#042743',
        backgroundColor : props.mode==='dark'?'rgb(36,74,104':'white',
    }

     return (
    <div className='container' style={{color : props.mode ==='dark' ? 'white' : '#042743'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Indroduction</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={mystyle}>
                <strong>Good morning/afternoon.</strong> Thank you for the opportunity to introduce myself. My name is <strong>Vivek kumar sharma</strong> , and I bring a diverse background in Two years to contribute to the team's success. I am a proactive and adaptable professional who excels in problem-solving and delivering high-quality results..
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Education</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={mystyle}>
                <strong> Education is about learning skills and knowledge.</strong>It also means helping people to learn how to do things and support them to think about what they learn. It is also important for educators to teach ways to find and use information. Education needs research to find out how to make it better.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>web developer</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={mystyle}>
                <strong>What do web developers do ?</strong> In short, they build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web. The work is typically very project focused and involves collaborating with a team that helps to coordinate the client's needs into the end product.
            </div>
            </div>
         </div>
        </div>
        {/* <div className='container  my-3'>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{bntText}</button>
        </div> */}
      </div>
  )
}

