import axios from 'axios';
import React,{Component , useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import Cfvideo from '../assets/cf-video.mp4';
import $ from "jquery";

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
class ContactFormFooter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            email : '',
            contact : '',
            marketing: '',
            message : ''
        };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        
        event.preventDefault()
        // console.log(this.props)
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
                $('.services-cta').attr('disabled', 'true')
                $('.services-cta').attr('disabled', 'true')
            }
            
            /* this.setState({
                mailSent: result.data.sent
            }) */
        })
        .catch(error => this.setState({ error: error.message }));
        $('.services-cta').css('opacity', '0.5');
        
        window.location.href = "https://www.expobird.com/thankyou-page"
        // this.props.history.push("/thankyou"); 
    };
    // componentDidMount(){
    //     const [Name , setName] = useState('');
    //     const HandleSubmit = (e) => {
    //         e.preventDefault();
    //         console.log(Name);
    //         setName('');
    //     }
    // }
    render(){
        return(
            <div className="container">
                <div className="thankyou-message p-3">
                    Thank you! We've received your message.
                </div>
            <div className="row testi-margin">
                <div className="col-12 col-sm-12 col-md-12 col-lg 6 text-center pt-5">
                        <video className="slight-br videoSize" alt="Unleashed Technology. Contact Us Now "  ref={makeMuted} autoPlay>
                            <source src={Cfvideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg 6 text-center mt-5 mt-sm-5 mt-md-5 mt-lg-0">
                    <h4 className="mb-3" id="ah2"><b>Request A Callback</b></h4>
                    <div><p className="text-secondary-center p-style">Send us an email if you have any questions about your project</p></div>
                    
                    <form action="email.php" method="post" onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input type="text" className="cf-fields" placeholder="Your Name" name="name" value={this.state.value} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <input type="email" id="" className="cf-fields" placeholder="Email" name="email" value={this.state.value} onChange={this.handleChange} required/>
                        </div>
                        <div className="mb-3">
                            <select  id="" name="marketing" onChange={this.handleChange} className="cf-fields" required>
                                <option value="">I'm interested in...</option>
                                <option value="Digital Marketing">Digital Marketing  </option>
                                <option value="Amazon Services">Amazon Services  </option>
                                <option value="Graphics and Design">Graphics and Design</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Video and Animation">Video and Animation</option>
                                <option value="Other">Other</option>
                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <textarea name="message" id="" cols="30" rows="3" placeholder="Your message" className="cf-fields" onChange={this.handleChange} required>

                            </textarea>
                        </div>
                        <div className="mb-3">
                            
                                <input type="number" name="contact" className="cf-fields" id="inlineFormInputGroup" placeholder="Contact#" onChange={this.handleChange} required/>
                            
                            
                        </div>
                        <input type="submit" name="" id="" className="services-cta cf-submit g-recaptcha" data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu"  data-action='submit' />
                        {/* <Link to="/thankyou">
                            <button class="services-cta g-recaptcha" 
                                data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu" 
                                data-callback={this.handleSubmit} 
                                data-action='submit'>Submit
                            </button>
                        </Link> */}
                            {/* <div>
                            {this.state.mailSent &&
                            <div>Thank you for contacting us.</div>}
                            </div> */}
                    </form>                
                </div>
            </div>
            </div>
        );
    }
}

export default ContactFormFooter;