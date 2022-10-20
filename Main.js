import React,{Component, Suspense , lazy} from 'react';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Homepage from './components/homepage'

import  InstagramMarketing from './components/instagram-marketing';
// import HiltonPharma = lazy(()=> import ('./components/HiltonPharma'));
import DigitalMarketing from'./components/pages/digitalMarketing';
import VideoProduction from './components/videoProduction';
// import DigitalVideoCommercial from'./components/digitalVideoCommercial';
import WebDevelopment from  './components/pages/WebDevelopment';
import Animation from './components/pages/Animation';
import GraphicDesign from './components/pages/GraphicDesign';
import EventManagement from'./components/pages/EventManagement';
import ContactUs from './components/pages/Contact-Us'
// import OxfordCaseStudy from('./components/pages/oxford-case-study'));
// import DiamondCaseStudy from'./components/pages/diamond-case-study'));
import AboutUs from './components/pages/About-Us'
import CaseStudy from './components/pages/CaseStudyListing';
import Footer from './components/Footer'
// import DIGITALMARKETINGINCOVID from './components/pages/DigitalMarketinginCovid';
// import NotFound from './Notfound';
import  Amazon from './components/amazon';
import  AmazonUK from './components/Uk-amazon';
import { Redirect, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet'
// import HelmetWrapper from './components/Helmet';
// import InsigniaCaseStudy from './components/pages/InsigniaCaseStudy';
import Client from './components/pages/our-client';
import SocialMediaMarketing from './components/pages/socialMediaMarketing';
import Seo from './components/pages/Seo';
import  Ebay from  './components/ebay';
import  Walmart from  './components/Walmart';
import  AliBaba from './components/AliBaba';
import Privacypolicy from './components/pages/privacypolicy';
import  DataLeakagePolicy from './components/pages/dlp';
import Thankspage from './components/pages/Thankyou-page';
// import EditBlog from './components/blogs/editBlog';
// import BlogList from './components/blogs/BlogList';
// import Blogsingle from './components/blogs/BlogSingle';
// import CreateBlog from './components/blogs/CreateBlog';
// import Example from './components/blogs/example';
// import Admin from './components/auth/login';


export default class Main extends Component{
    render(){
        return(
            
            <Router>
                <div>
                    
                    {/* <HelmetWrapper title={"Expobird"} description={"This is main Home page"}/> */}
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact
                            component={Homepage}
                        />
                        {/* <Route path="/DIGITAL-MARKETIN-IN-COVID-19" 
                            component={DIGITALMARKETINGINCOVID}
                        /> */}
                        {/* <Suspense fallback={<h1 className='text-center'>Loading...</h1>}> */}
                        {/* <Route path="/case-study"
                            component={CaseStudy}
                        /> */}
                        
                        <Route path="/amazon-services"
                            component={Amazon}
                        />
                        {/* <Route path="/ebay-services"
                            component={Ebay}
                        /> */}
                        {/* <Route path="/alibaba-services"
                            component={AliBaba}
                        /> */}
                        {/* <Route path="/walmart-services"
                            component={Walmart}
                        /> */}

                        {/* <Route path="/instagram-marketing"
                            component={InstagramMarketing}
                        />                         */}
                        
                        {/* <Route path="/Hilton-Pharma"
                            component={HiltonPharma}
                        /> */}
                                   
                        <Route path="/digital-marketing" 
                        >
                            <DigitalMarketing/>
                        </Route>
                        
                        <Route path="/search-engine-optimization" 
                            component={Seo}
                            />

                        <Route path="/social-media-marketing"
                            component={SocialMediaMarketing}
                            />

                        <Route path="/video-production-service"
                            component={VideoProduction}
                            />

                        {/* <Route path="/digital-video-commercial"
                            component={DigitalVideoCommercial}
                            /> */}

                        <Route path="/web-development"
                            component={WebDevelopment}
                            />

                        <Route path="/animation"
                            component={Animation}
                            />

                        <Route path="/our-clients"
                            component={Client}
                            />                           
                            
                        <Route path="/graphic-design"
                            component={GraphicDesign}
                            />

                        <Route path="/event-management"
                            component={EventManagement}
                            />
                            
                        <Route path="/contact-us"
                            component={ContactUs}
                        />
                        <Route path="/about-us" 
                            component={AboutUs}
                        />

                        {/* <Route path="/oxford-case-study"
                            component={OxfordCaseStudy}
                            /> */}
                            
                        {/* <Route path="/diamond-case-study"
                            component={DiamondCaseStudy}
                            /> */}

                        {/* <Route path="/Insignia"
                            component={InsigniaCaseStudy}
                            />  */}
                        <Route path="/privacy-policy"
                            component={Privacypolicy}
                            />
                        <Route path="/data-leakage-prevention-policy"
                            component={ DataLeakagePolicy }
                            />
                        <Route path="/thankyou-page"
                            component={Thankspage}
                            />
                        {/* <Route path="/blogs"
                            component={ BlogList } 
                        />
                        <Route path="/blog/:id"
                            component={ Blogsingle } 
                        />
                        <Route path="/edit/:id">
                                <Protected Cmp={EditBlog}/>
                        </Route>
                        <Route path='/add-blog'>
                            <Protected Cmp={CreateBlog}/>
                        </Route>
                        <Route path="/login"
                            component={Admin}
                        /> */}
                        <Route
                        path="/amazon-services-uk"
                        component={AmazonUK}
                        />
                         <Redirect from="*" to="/" />
                         {/* </Suspense> */}
                    </Switch>
                     
                   
                    <Footer/>
                </div>
            </Router>


        );
    }
}