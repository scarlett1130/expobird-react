    import React, { Component } from 'react';
import bannerImg from '../../assets/seo-layers.svg'
import Purple from '../../assets/purple.svg'
import pink from '../../assets/pink.svg'
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import $ from "jquery";
import axios from 'axios';

export default class SeoBanner extends Component{
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
};

hack(){
    alert('asda');
}

    render(){
        return(
            <div className="row ">
                <div className="col-12 seo-banner wave-image">
                <div id="seo-pink">
                            <img src={pink} alt=""/>
                        </div>
                        <div id="seo-pentagon">
                            <img src={Purple} alt=""/>
                        </div>
                        <div className="container align-items-center ">
                            <div className="row align-items-center ">
                    <div className="col-12 col-lg-7 mt-5 mt-lg-0 pt-5 pt-lg-0 text-center text-lg-left">
                        {/* <div className="wave-image">
                            <img src={bannerImg}   alt=""/>
                        </div> */}
                        <div className="heading-text">
                            <h1 id="heading-main">Get our top-notch on page and <br/>off page SEO services in <br/>Pakistan</h1>
                            <p id="sub-text">
                            We help you rank on the top with proven and tested SEO techniques all over Pakistan. Invest in high returns for your business with the help of a top Search Engine Optimization Company. 
                            </p>
                            <Link to="/contact-us"><button className="rf">Get Started</button></Link>
                        </div>
                    </div>
                    <div className="col-12  col-lg-5 pt-5 pt-lg-0 mb-5">

                    <div id="seo-form" className="pl-1 pl-sm-5 pl-md-4">
                        <div className="ml-2">
                            <h2 className="fw">Get Free Consultancy!</h2>
                        </div>
                        <form action="email.php" method="post" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Enter Your Name" name="name" value={this.state.value} onChange={this.handleChange} required/>    
                        
                                                
                            <input type="email" placeholder="Enter Your Email" name="email" value={this.state.value} onChange={this.handleChange} required/>    
                                                
                            <input type="number" placeholder="Enter Contact No." name="contact" id="inlineFormInputGroup" required/>  

                            <input type="text" placeholder="Enter Your Website" name="website" value={this.state.value} onChange={this.handleChange} required/>    
                        
                                  <br/>              
  
                            <input type="submit" name="" id="seo-submit" data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu"  data-action='submit'/>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }

}