import React,{Component} from 'react';
import expobirdLogo from '../assets/expobird footer logo.svg'
import PakFlag from '../assets/pakistan-flag-icon.png'
import servicesLogo from '../assets/web.svg'
import contactLogo from '../assets/phone.png'
import FacebookLogo from '../assets/facebook.png'
import InstagramLogo from '../assets/instagram.png'
import TwitterLogo from '../assets/twitter.png'
import LinkedinLogo from '../assets/linkedin.svg'
import YoutubeLogo from '../assets/youtubelogo.png'
import agreementLogo from '../assets/negotiation.png'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";
import axios from 'axios';

export default class Footer extends Component{

    componentDidMount(){
        let date = new Date();
        document.getElementById("date").innerHTML = date.getFullYear();
    }
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',

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
            url: 'https://expobird.com/email.php',
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
        $('.services-cta').css('opacity', '0.5')
        $('.services-cta').attr('disabled', 'true')
        $('.services-cta').attr('disabled', 'true')
        window.location.href = "https://www.expobird.com/thankyou-page"
};

hack(){
    alert('asda');
}

    render(){
        return (
          <div className="footer testi-margin2">
            <div className="row text-center">
              <div className="thankyou-message p-3">
                Thank you! We've received your message.
              </div>
              <div className="footerHeader col-md-12 mt-5">
                <h5>
                  Join ExpoBird newsletter and be among the first ones <br /> to
                  receive our latest news and offers
                </h5>
                <br />
                <h6 className="chimney">
                  You can easily unsubscribe at any time.
                </h6>
              </div>
            </div>
            <div className="row my-3  footerBorder">
              <div className="col-1 col-sm-2 col-md-3 col-lg-3 mb-5"></div>
              <div className="col-10 col-sm-8 col-md-6 col-lg-6 mb-5 px-3">
                <div className="text-center px-4">
                  <div className="email-panel">
                    <form
                      action="email.php"
                      method="post"
                      onSubmit={this.handleSubmit}
                    >
                      <div className="py-3 px-md-0 px-lg-3">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-5 text-center text-lg-left">
                            <input
                              className=" email-field"
                              type="text"
                              placeholder="Enter Your Name"
                              name="name"
                              value={this.state.value}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-7 text-center text-lg-left">
                            <input
                              className="email-field"
                              type="email "
                              placeholder="Enter Your Email"
                              name="email"
                              value={this.state.value}
                              onChange={this.handleChange}
                              required
                            />
                            <span></span>
                            <button
                              className="services"
                              id="submit-btn"
                              type="submit"
                              data-action="submit"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="col-1 col-sm-2 col-md-3 col-lg-3 mb-5"></div> */}
            </div>
            <div className="row pt-3 pb-2">
              <div className="col-12 col-sm-4 col-md-4 col-lg-3 pt-3  mb-5 text-center">
                <img
                  width="80"
                  className="footer-Mainlogo"
                  src={expobirdLogo}
                  alt=""
                />
              </div>
              <div className="col-12 col-sm-7 col-md-7 col-lg-6 pt-3 mb-5">
                <p className="footerText  text-md-center">
                  Convey your message and explain your business with digital
                  marketing that will keep your audience engaged with online
                  marketing and serve your purpose with ExpoBird Marketing
                  Agency
                </p>
              </div>
              <div className="col-0 col-sm-1 col-md-1 col-lg-3 mb-5 "></div>
            </div>

            <div className="row px-lg-5 pb-5 pt-3 pl-md-3 pl-sm-1 pl-1 pr-1 pr-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                {/* <h3></h3> */}
                <ul className="pl-1 pl-md-5 ft-menu text-center text-sm-center text-md-center text-lg-left mt-3">
                  <li className="list-none footer-menu-heading mt-2">
                    {/* <img className="mr-3 footerIcons" width="30"src={contactLogo}></img> */}
                    <span>Contact</span>
                  </li>
                  <li className="list-none mt-4">
                    <p className="FooterColor2">
                      Plot No.129-O, Ground Floor, P.E.C.H.S, Block 2,
                      Karachi,Sindh 75100, Pakistan
                      <br />
                      <span className="py-2">
                        <a
                          className="text-decoration-none FooterColor2 my-2"
                          href="tel: +92-330-2033334"
                        >
                          {" "}
                          +92-330-2033334
                        </a>
                      </span>
                      <span className="py-2">
                        <a
                          className="text-decoration-none FooterColor2 my-2"
                          href="mailto: info@expobird.com"
                        >
                          {" "}
                          info@expobird.com
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                <ul className=" pl-1 pl-md-5  ft-menu text-center text-sm-center text-md-center text-lg-left mt-3">
                  <li className="list-none footer-menu-heading mt-2">
                    {/* <img className="mr-3 footerIcons" width="30"src={servicesLogo}></img> */}
                    <span>Services</span>
                  </li>
                  <li className="list-none  FooterColor mt-4">
                    <Link
                      className="text-decoration-none FooterColor"
                      to="/graphic-design"
                    >
                      Graphics & Design
                    </Link>
                  </li>
                  <li className="FooterColor list-none mt-2">
                    <Link
                      className="text-decoration-none FooterColor"
                      to="/web-development"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="FooterColor list-none mt-2">
                    <Link
                      className="text-decoration-none FooterColor"
                      to="/animation"
                    >
                      Animation
                    </Link>
                  </li>
                  <li className=" FooterColor list-none mt-2">
                    <Link
                      className="text-decoration-none FooterColor"
                      to="/digital-marketing"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 text-center text-sm-center text-md-center text-lg-left">
                <ul className=" pl-1 pl-md-5 ft-menu text-center text-sm-center text-md-center text-lg-left mt-3">
                  <li className="footer-menu-heading list-none mt-2">
                    {/* <img className="mr-2 footerIcons" width="40"src={agreementLogo}></img> */}
                    <span id="privacy-policy">Terms of Services</span>
                  </li>
                  <li className="list-none FooterColor mt-4">
                    Privacy Policy
                    <Link
                      className="text-decoration-none FooterColor"
                      to="/privacy-policy"
                    >
                      here
                    </Link>
                  </li>
                  <li className="list-none FooterColor mt-2">
                    <Link
                      className="text-decoration-none FooterColor text-capitalize "
                      to="/data-leakage-prevention-policy"
                    >
                      Data Leakage Prevention Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 text-center text-sm-center text-md-center text-lg-left">
                <ul className="pl-1 pl-md-5 ft-menu text-center text-sm-center text-md-center text-lg-left mt-3">
                  <li className="footer-menu-heading list-none mt-2">
                    <span id="privacy-policy">Follow Us</span>
                  </li>
                  <ul className=" mb-n1 mt-4  list-none d-flex  justify-content-center ">
                    <li className="ml-n2 list-none">
                      <a
                        className="footerbtn"
                        href="https://www.facebook.com/expobird"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        {/* <FontAwesomeIcon icon={faCoffee} /> */}
                        <img
                          className=""
                          width="25"
                          src={FacebookLogo}
                          alt="Facebook Logo"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="footerbtn"
                        href="https://www.instagram.com/expobird_/?hl=en"
                      >
                        {/* <i className="fa fa-instagram"></i> */}
                        <img
                          className=""
                          width="25"
                          src={InstagramLogo}
                          alt="Instagram Logo"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="footerbtn"
                        href="https://www.linkedin.com/company/expobird"
                      >
                        {/* <i className="fa fa-linkedin"></i> */}
                        <img
                          className=""
                          width="25"
                          src={LinkedinLogo}
                          alt="Linkedin Logo"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className="footerbtn"
                        href="https://twitter.com/expobird"
                      >
                        {/* <i className="fa fa-linkedin"></i> */}
                        <img
                          className=""
                          width="25"
                          src={TwitterLogo}
                          alt="Twitter Logo"
                        />
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="row footerEnd py-3">
              <div className="col-12 text-center pt-2">
                <div>
                  {" "}
                  <small>
                    {" "}
                    ExpoBird &#9400; <span id="date"> </span> - All Rights
                    Reserved
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
    }
}