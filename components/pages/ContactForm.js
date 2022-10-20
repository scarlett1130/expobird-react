import $ from "jquery";
import React, { Component } from 'react';
import axios from 'axios';
import { Link,withRouter } from "react-router-dom";


class ContactForm extends Component{

    componentDidMount() {

        window.scrollTo(0, 0)
        /* $(document).ready(function(){
            $(".submitForm").click(function(){
              alert("The paragraph was clicked.");
            });
          }); */
    }

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            contact: '',
            message : '',
            marketing: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});

    }
    handleSubmit(event) {
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
            data: this.state
        })
        .then(result => {

            if(result.success){
                // console.log('here')
            }
            
            /* this.setState({
                mailSent: result.data.sent
            }) */
        })
        .catch(error => this.setState({ error: error.message }));
        $('.services-cta').css('opacity', '0.5');
        $('.services-cta').attr('disabled', 'true');
        $('.services-cta').attr('disabled', 'true');
        window.location.href = "https://www.expobird.com/thankyou-page"
        // this.props.history.push("/thankyou"); 
};

hack(){
    alert('asda');
}

    
    render(){
        return( 
                <div>
                    <div className="container text-center" id="started">
                    <div className="thankyou-message p-3">
                        Thank you! We've received your message.
                    </div>
                    <form action="email.php" method="post" onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="cf-fields" placeholder="Your Name" name="name" value={this.state.value} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <input type="email" id="" className="cf-fields" placeholder="Email" name="email" value={this.state.value} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleChange} name="marketing" id="" className="cf-fields" required>
                                <option value="">I'm interested in...</option>
                                <option value="Digital Marketing">Digital Marketing  </option>
                                <option value="Amazon Services">Amazon Services </option>
                                <option value="Graphics and Design">Graphics and Design</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Video and Animation">Video and Animation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <textarea  id="" onChange={this.handleChange} cols="30" rows="3" className="cf-fields" name="message" required>

                            </textarea>
                        </div>
                        <div className="mb-3">
                            <input type="number" onChange={this.handleChange}  id="" name="contact" placeholder="Your Contact#" className="cf-fields" required/>
                        </div>
                        <input type="submit" name="" id="" className="services-cta cf-submit g-recaptcha" data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu"  data-action='submit' />
                        {/* <Link to="/thankyou">
                        <button class="services-cta g-recaptcha" 
                            data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu" 
                            data-callback={this.handleSubmit} 
                            data-action='submit'>Submit
                        </button>
                        </Link> */}
                    </form>
                    </div>
                </div>
    );
        }
}
 
export default ContactForm;