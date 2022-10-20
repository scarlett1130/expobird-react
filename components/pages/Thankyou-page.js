import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';



export default class Thankspage extends Component {
    componentDidMount() {

        window.scrollTo(0, 0)
       
    }
    render() { 
        return (
        <div>
                <Helmet>
                    <title>Expobird | Thankyou</title>
                    {/* <meta name="description" content="You're looking for Digital Marketing Company in Pakistan? ExpoBird | Digital Marketing Agency Pakistan provide Best Marketing services in 2022"/> */}
                    {/* <meta name="keywords" content="Top Social Media Marketing, Digital Marketing, Web Development, eCommerce website, Magento eCommerce, Amazon Marketing, Amazon FBA, Progressive Web Application (PWA), Search Engine Optimization (SEO), Video Production, Corporate Video Production" /> */}
                    <link rel="canonical" href="https://www.expobird.com/thankyou-page" />

                </Helmet>
            <div className="container mt-5">
                <div className="row pt-0 pt-md-5">
                    <div className="col-12 col-lg-3"></div>

                    <div className="col-12 col-lg-6 p-5 thankyouCard text-center">
                        <h1 className="thankyouHead">
                            Thank you!
                        </h1>
                        <p className="mt-4 p-style">
                            We have recieved your email. <br/>
                            Our Customer service team will contact you shortly.
                        </p>
                        <div className="mt-4">
                            <Link to="/">
                                <button className="rf">Go Home</button>
                            </Link>
                        </div>
                    <Link className='text-decoration-none FooterColor' to='/amazon-services-uk' style={{display : 'none'}}>amazon-services-uk</Link>
                    </div>

                    <div className="col-12 col-lg-3"></div>
                </div>
            </div>
        </div>
        );
    }
}
 
