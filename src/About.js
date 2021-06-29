import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com'
import './index.css';


const About = () => {
    const [text,setText]=useState("");
    const setTextt=(event)=>{
        setText(event.target.value);
        event.preventDefault();
    }
     const [nume,setNume]=useState("");
    const setNumee=(event)=>{
        setNume(event.target.value);
        event.preventDefault();
    }
     const [mail,setMail]=useState("");
    const setMaill=(event)=>{
        setMail(event.target.value);
        event.preventDefault();
    }
    function sendFeedback (templateId, variables){
	emailjs.send(
  	'service_vqmnuk9', templateId,
  	variables, 
'user_J9rbTfehJydL2H0UayDjI'
  	).then(res => {
    	console.log('Email successfully sent!')
        window.reload()
        alert('Mesajul a fost trimis!')

  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
  function handleSubmit(event){
      event.preventDefault();
      const templateId = 'template_4qm4g05';
     

	sendFeedback(templateId, {message:text, from_name:nume, mail:mail})
    

  }
    return (
        <>
        {/* 
        <div  className='txt'>
        <h4 className='txt' style={{textAlign:'center'}}>Introduceti mesajul:</h4>
        <br />
        <textarea  rows="10" cols="100" autofocus></textarea>
        <p id='trimite' style={{textAlign:'center'}}><p className='butn' style={{width:'30%'}}>Trimite</p></p>
        </div> */}
        <h1 >Trimite-ne un mesaj:</h1>
        <div className='notSolidSmoll'>
       
</div>
        <form className='txt'  onSubmit={handleSubmit}>
            {/* <label className="txt" > */}
               <p className='txt' style={{textAlign:'center'}}>
               <h3> Introduceti numele:</h3>
                <input className='msg2' type="text" value={nume} onChange={setNumee} />
                </p>
               
                <p className='txt' style={{textAlign:'center'}} >
                    <h3> Introduceti mesajul:</h3>
                <textarea className='msg'   type="text" value={text} onChange={setTextt} />
                </p>
               
                 <p className='txt' style={{textAlign:'center'}}>
               <h3> Introduceti mailul:</h3>
                <input className='msg2' type="text" value={mail} onChange={setMaill} />
                </p>
               
            {/* </label> */}
            <p style={{textAlign:'center'}}> <button className='butn' type="submit">Trimite</button> </p>
        </form>
       <div className='notSolidSmoll'></div>
        </>
    );
}

export default About;