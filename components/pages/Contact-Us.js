import './seo.css';
import React, { Component } from 'react';
import location from '../../assets/Location-icon-01.svg'
import Mail from '../../assets/email-icon-01.svg'
import HomeLogo from '../../assets/home-icon-01.svg'
import ContactForm from './ContactForm';
import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from "jquery";
import Banner from '../pages/banner'
import {Link} from 'react-router-dom'



 class ContactUs extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
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
                console.log('here')
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
        return (
          <div>
            <Helmet>
              <title>Contact Us | ExpoBird</title>
              <meta
                name="description"
                content="For any queries, feel free to contact us. ExpoBird is 24/7 live to entertain you."
              />
              <link
                rel="canonical"
                href="https://www.expobird.com/contact-us"
              />
            </Helmet>
            <div className="row background-2">
              <div className="container text-center">
                <h1 id="heading-main">Contact Us</h1>
              </div>
            </div>
            <div className="container">
              <Link to="/">Home</Link> &#xbb;{" "}
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <div className="container">
              <div className="row ">
                <div className="thankyou-message p-3">
                  Thank you! We've received your message.
                </div>

                {/* <div className=" container"> */}

                {/* <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-5"></div> */}
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 text-left my-lg-5 py-5 ">
                  {/* <h4 className="text-uppercase ">Contact us</h4> */}
                  <h2 className="text-capitalize contactSize ">
                    Let's Build Together
                  </h2>
                  <p className="header-description">
                    Our customer service team is ready to help you ahead. Just
                    give us a call or fill up the contact form below.
                  </p>
                  <h3>
                    <a className="contactInfo" href="tel:+92-330-2033334">
                      +92-330-2033334
                    </a>
                  </h3>
                  <h3>
                    <a className="contactInfo" href="mailto:info@expobird.com">
                      info@expobird.com
                    </a>
                  </h3>

                  <div className="row justify-content-around mt-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3 contactInfoMargin py-4 Cards contactAdressCard">
                      <h5 className="contactAdress ">Headquarter</h5>
                      <h5 className="contactAdressInfo">Karachi Office</h5>
                      <p>
                        Plot No.129-O, Ground Floor, P.E.C.H.S, Block 2,
                        Karachi,Sindh 75100, Pakistan
                      </p>
                      <div>
                        <iframe
                          className="mobile-map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.9428869688304!2d67.05085514018442!3d24.874954782344904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f171277b2e7%3A0xd279dda1f08cd42!2sExpoBird%20%7C%20Social%20Media%20%26%20Top%20Digital%20Marketing%20Agency%20%7C%20SEO%20services!5e0!3m2!1sen!2s!4v1621870023166!5m2!1sen!2s"
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3 py-4  Cards contactAdressCard">
                      <h5 className="contactAdressInfo">US Office</h5>
                      <p className="">
                        9585 Jones Rd, Houston, TX 77065, United States
                      </p>
                      <div>
                        <iframe
                          className="mobile-map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.339385193615!2d-95.587519184888!3d29.912130181930586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d1b7a0a250e1%3A0x61788b2dc23644d8!2s9585%20Jones%20Rd%2C%20Houston%2C%20TX%2077065%2C%20USA!5e0!3m2!1sen!2s!4v1615297184915!5m2!1sen!2s"
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="row  mt-3">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-3 contactInfoMargin py-4 Cards contactAdressCard">
                      <h5 className="contactAdressInfo">UAE Office</h5>
                      <p className="">
                        Suite # 405, Al - Zarouni Building, Opp Central Bank Of
                        Sharjah U.A.E.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-left my-lg-5 py-5 ">
                  {/* <p id="thank-you-message">
                        Thank you for contacting us. We will be in touch with you very soon.
                        </p> */}
                  <h4 className="mb-3" id="ah2">
                    <b>Request A Callback</b>
                  </h4>
                  <form
                    action="email.php"
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="cf-fields"
                        placeholder="Your Name"
                        name="name"
                        value={this.state.value}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        id=""
                        className="cf-fields"
                        placeholder="Email"
                        name="email"
                        value={this.state.value}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        onChange={this.handleChange}
                        name="marketing"
                        id=""
                        className="cf-fields"
                        required
                      >
                        <option value="">I'm interested in...</option>
                        <option value="Digital Marketing">
                          Digital Marketing{" "}
                        </option>
                        <option value="Amazon Services">
                          Amazon Services{" "}
                        </option>
                        <option value="Graphics and Design">
                          Graphics and Design
                        </option>
                        <option value="Website Development">
                          Website Development
                        </option>
                        <option value="Video and Animation">
                          Video and Animation
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <textarea
                        id=""
                        onChange={this.handleChange}
                        cols="30"
                        rows="3"
                        className="cf-fields"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        onChange={this.handleChange}
                        id=""
                        name="contact"
                        placeholder="Your Contact#"
                        className="cf-fields"
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      name=""
                      id=""
                      className="services-cta  g-recaptcha"
                      data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu"
                      data-action="submit"
                      data-callback="onSubmit"
                    />
                    <Link to="/thankyou-page"></Link>
                    {/* <Link to="/thankyou">
                            <button class="services-cta g-recaptcha" 
                                data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu" 
                                data-callback={this.handleSubmit} 
                                data-action='submit'>Submit
                            </button>
                        </Link> */}
                  </form>
                  {/* This site is protected by reCAPTCHA Enterprise and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply. */}
                  {/* <Recaptcha
                        sitekey=""
                        render="explicit"
                        onloadCallback=
                    /> */}
                </div>
                {/* <div className="col-12 col-sm-12 col-md-12 col-lg-2 "></div> */}
              </div>
            </div>
            {/* <div className="container">
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center px-3 py-4">
                            <div className="px-3 py-4 Cards">
                                <img width="100" className="Contact-icon" src={location} alt=""/>
                                <h5 className="py-4">Office Address</h5>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Plot 3H, Flat G-2</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">block 6 PECHS</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Sharah e Faisal</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Karachi, Pakistan</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center px-3 py-4">
                            <div className="py-4 px-3 Cards">
                                <img width="100" className="Contact-icon" src={Mail} alt=""/>
                                <h5 className="py-4">Contact Us</h5>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Email:</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">info@expobird.com</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Contact:</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">+92 333 3375061</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 text-center px-3 py-4">
                            <div className="py-4 px-3 Cards">    
                                <img width="100" className="Contact-icon" src={HomeLogo} alt=""/>
                                <h5 className="py-4">Availability</h5>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Monday to Saturday</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">9am to 6pm</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Sunday</p>
                                <p className="pb-lg-3 pb-md-0 pb-sm-0">Closed</p>
                            </div>    
                        </div>
                        <div className="col-2 mt-5"></div>
                        <div className="col-8 mt-5 contactCard">
                            <h2 className="text-center">Send a Message</h2>
                            <p className="text-center pt-4">Select a topic for inquiry and fill the form to contact us.</p>
                        </div>
                        <div className="col-2 mt-5"></div>
                        <ContactForm/>
                    </div>
                </div>  */}
          </div>
          // </div>
        );
    }
}

export default ContactUs;