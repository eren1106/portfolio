import React, {useRef, useContext} from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'
const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_9ma8qly', 'template_l3pd6bn', formRef.current, 'DJa80O6fLJY59K_xn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className='c-icon'/>
                        +60 123456789
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className='c-icon'/>
                        eren@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className='c-icon'/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, soluta?
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo enim, eum nam ea est deserunt? Suscipit!
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email'/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact