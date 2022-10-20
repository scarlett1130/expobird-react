import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../pages/PopupForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import $ from "jquery";

const PopupForm = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [formfields, setFields] = useState({
    'name' : '',
    'email' : '',
    'contact' : '',
    'message' : ''
  });
  let history = useHistory();
function HandleChange (event){
    const field = event.target.name;
    const val = event.target.value;
    
    setFields(formfields => ({...formfields, [field]: val}))  
  }
  
  function handleSubmit(event){
    event.preventDefault();
    $('.thankyou-message').css({
      'display' : 'block'
      });
      setTimeout(()=>{
      $('.thankyou-message').css({
          'display' : 'none'
      });
    }, 2000);
    


    axios({
      method: 'post',
      url: 'https://www.expobird.com/email.php',
      headers: { 'content-type': 'application/json' },
      data: formfields
    })
    .then(result => {

        if(result.success){
            console.log('here')
        }
        
    })
    .catch(error => this.setState({ error: error.message }));
    $('.services-cta').css('opacity', '0.5')
    $('.services-cta').attr('disabled', 'true')
    $('.services-cta').attr('disabled', 'true')
    history.push("/thankyou-page");

  }

  
  const toggle = () => setModal(!modal);

  
  return (
    <div>
      <div className="thankyou-message p-3">
          Thank you! We've received your message.
      </div>
      <button className="services" onClick={toggle}>Find out more &nbsp;<FontAwesomeIcon icon={faCaretRight}/></button>
      <Modal isOpen={modal} toggle={toggle} className={className} >
        <ModalHeader toggle={toggle}><h4 className="text-center" id="ah2"><b>Request A Callback</b></h4></ModalHeader>
        <ModalBody>
        {/* <div class="container-contact100">
        <div class="wrap-contact100"> */}
        <form action="email.php" method="post" onSubmit={handleSubmit} className="text-center mt-3">
            <div className="mb-3">
                <input type="text" className="cf-fields" placeholder="Enter Your Name" name="name" value={formfields.name} onChange={HandleChange} required/>
                {/* <input type="text" placeholder="Enter Your Name" name="name" value={formfields.name} onChange={HandleChange} required/> */}
            </div>
            <div className="mb-3">
                <input type="email" id="" className="cf-fields" placeholder="Enter Your Email" name="email" value={formfields.email } onChange={HandleChange} required/>
            </div>
            <div className="mb-3">
                <input type="text"   id="" name="contact" value={formfields.contact} onChange={HandleChange} placeholder="Enter Contact No." className="cf-fields" required/>
            </div>
            <div className="mb-3">
                <textarea  id=""  placeholder="Enter Message" cols="30" value={formfields.message} onChange={HandleChange} rows="3" className="cf-fields" name="message">

                </textarea>
            </div>

            <input type="submit" name="" id="" className="services-cta cf-submit g-recaptcha" data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu"  data-action='submit' />
          </form>
{/* </div>
</div> */}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PopupForm;