import React, { Component } from 'react';
import CaseStudyBanner from '../../assets/casestudy.png'
import oxford from '../../assets/oxford.png';
import diamondHomes from '../../assets/diamond homes.png'
import Ctafifth from './cta-five';
import {Link} from "react-router-dom";
import ContactForm from './ContactForm';
import HelmetWrapper from '../Helmet';
import Image5 from '../../assets/Our services.png'
import BlogTemplate from './BlogList_Template';
import searchIcon from '../../assets/search.svg'
import Oxford from '../../assets/OxfordLogo.png';
import Banner from '../pages/banner';
import insignia from '../../assets/insignia.png'
import { Helmet } from 'react-helmet';




export default class CaseStudy extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
        
      }
      
    render(){
        return(

            <div>
                <Helmet>
                    <title>Case study For Digital Marketing Company | ExpoBird</title>
                    <meta name="description" content="ExpoBird has overcome so many challenges over the years, Our clients and their arising  challenges and how it was dealt with. A top digital marketing company in Pakistan"/>
                </Helmet>
                <div className="row background-2">
                            <div className="container text-center">
                                <h1 id="heading-main">Case Study</h1>
                            </div>
                </div>
                <div className="container">
                    <div className="row  py-5">
                        <div className="col-12 text-center">
                            <p className="BlogTopText text-capitalize">Do Explore Our Collabs For complete assuarance of our services</p>
                        </div>
                    </div>
                    <BlogTemplate increase={"24,145"} increaseDescription={"increase in total site conversion in six month"} image={Oxford} btnTXT={"Have A Look"} links={'/oxford-case-study'}/>

                    <BlogTemplate increase={"24,145"} increaseDescription={"increase in total site conversion in six monthn"} image={diamondHomes} btnTXT={"Have A Look"} links={'/diamond-case-study'}/>

                    <BlogTemplate increase={"24,145"} increaseDescription={"increase in total site conversion in six monthn"} image={insignia} btnTXT={"Have A Look"} links={'/Insignia'}/>
                    
                </div>
           </div>
        )
    }
}