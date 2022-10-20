import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledCollapse,
  CardBody,
  Card,
  NavItem,
  NavLink,
} from 'reactstrap';

import expoBirdLogo from '../assets/Expobird-whitelogo.png'
import expoBirdSticky from '../assets/sticky menu navigation.png'
import whatsApp from '../assets/whatsapp-iconformatted.webp'
import call from '../assets/call icon.svg'
import $ from "jquery"
import videoProductionimg from '../assets/Video Production.svg'
import webDevelopment from '../assets/Web Development.svg'
import Branding from '../assets/Branding.svg'
import Vfx from '../assets/2D 3D VFX Animation.svg'
import Dm from '../assets/Digital Marketing.svg'
import Seo from '../assets/S.E.O.svg'
import Photography from '../assets/Photography.svg'
import OnlineMarketing from '../assets/Online Marketing.svg'
import graphicsDesign from '../assets/services-1.gif'
import videoProduction from '../assets/video-production-expobird.gif'
import animation from '../assets/video-animation-expobird.gif'
import digimarket from '../assets/digital-marketing-expobird.gif'
import services5 from '../assets/web-development-expobird.gif'
import sm from '../assets/social-media-expobird.gif'
import whatsapp from '../assets/whatsapp-brands.svg'
import {Link} from "react-router-dom";


// const admin  = JSON.parse(localStorage.getItem('Admin'))
// const user  = JSON.parse(localStorage.getItem('user'))

// const HandleClick = () => {
//   localStorage.removeItem('user')
// }
class Navbars extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.shoot = this.shoot.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.menuCollapse = this.menuCollapse.bind(this);
    // this.myFunction = this.myFunction.bind(this);
    // this.openNav = this.openNav.bind(this);
    this.MobCloseNav = this.MobCloseNav.bind(this);
  };
 
shoot(){
  /* $('.service-menu').toggleClass('dropdown-show') */
  $('.dropdown-content').css({
    'display' : 'none',

  });
  /* $('.service-menu').css({
      'visibility' : 'hidden',
      'opacity' : '0',
      'zIndex': '-1'

    }); */
}
mouseOut(){
   
  $('.service-menu').css({
      'display' : 'block',
      'visibility' : 'visible',
      'opacity' : '1',
      'zIndex': '1'
  });
}
mouseIsOut(){
  $('.dropdown-content').css({
    'display' : 'none',

  });

}
menuCollapse(){
  $('.service-menu').css({
    'display' : 'block',
    'visibility' : 'visible',
    'opacity' : '1',
    'zIndex': '1'
});

}
componentDidMount(){

  if(window.matchMedia("(min-width: 768px)").matches){
    // console.log('yeah');
    $(window).scroll(()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        $(".navbar").css({
          position: 'fixed',
          zIndex : 2,
          backgroundColor : "white",
          padding : "0"
        })  ;
        $('#logo').attr('src',expoBirdSticky);
        $('#logo').css('width', '62px');
        $(".menu a:link").css({
          color:"#2E3192",
          fontSize : "15px"
        });
        $(".nostyling").css("color","#2E3192");
        $(".menu").css({
          boxShadow: "rgba(210, 210, 210, 0.5) 0px 3px 16px 0px"
        });
  
      }
      else {
        $(".navbar").css({
          "position": "relative",
          "backgroundColor" : "#2E3192"
        });
        $('#logo').attr('src',expoBirdLogo);
        $('#logo').css('width', '76px');
        $(".menu a:link").css({
          color:"white",
          fontSize : "15px"
        });
        $(".nostyling").css("color","white");
        $(".menu").css({
          "boxShadow" : "none"
        })
        $(".dropdown-menu-headings").css("color","black");
      }
    })
  }
}
  // $(".dropdown-content").mouseover(function(){
  //   $(".dropdown-content").css("background-color", "yellow");
  // });

openNav(){
  document.getElementById("mySidebar").style.width = "50%";
  document.getElementById("main").style.marginRight = "40px";
  document.getElementById("menu-icon").style.display = "none"
  // var x = window.matchMedia("(max-width: 700px)")
  // this.myFunction(x); // Call listener function at run time
  // x.addListener(this.myFunction);
}

// myFunction(x){
//   if (x.matches) { // If media query matches
//   document.getElementById("mySidebar").style.width = "100%";
//   document.getElementById("mySidebar").style.textAlign = "center";
//   document.getElementById("main").style.marginRight = "0px";

//   }
// }

closeNav(){
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.getElementById("menu-icon").style.display = "flex"
}

MobCloseNav(){
  
  if (window.matchMedia("(max-width: 767px)").matches){
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
      document.getElementById("menu-icon").style.display = "flex"
    }
}

  render(){

  return (
    <div>
      <Navbar  className="menu " fixed="top" >
      <div id="mySidebar" className="sidebar"  >
        <Link  className="nav-link closebtn" to="#"  onClick={this.closeNav}>×</Link>
        <Link onClick={this.MobCloseNav} className="active nav-link" to="/our-clients">Clients</Link>
        <Link className="active nav-link dropdown-toggle dropdownLink" id="toggler" to="/">Services</Link>
        <UncontrolledCollapse toggler="#toggler">
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/digital-marketing"><small>Digital Marketing</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/social-media-marketing"><small>Social Media Marketing</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/search-engine-optimization"><small>Search Engine Optimization</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/web-development"><small>Web & App Development</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/video-production-service"><small>Video Production</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/animation"><small>Animation</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/amazon-services"><small>Amazon Services</small></Link>
          <Link onClick={this.MobCloseNav} className="active nav-link" to="/graphic-design"><small>Graphics & Design</small></Link>
          
        </UncontrolledCollapse>
                
        {/* <a  onClick={this.MobCloseNav} className="active nav-link" href="https://expobird.com/portfolio">Portfolio</a> */}
        {/* <Link onClick={this.MobCloseNav} className="active nav-link" to="/case-study">Case Study</Link> */}
        <a onClick={this.MobCloseNav} className="active nav-link" href="/blog">Blogs</a> 
        <Link onClick={this.MobCloseNav} className="active nav-link" to="/about-us">About Us</Link>
        <Link onClick={this.MobCloseNav} className="active nav-link" to="/contact-us">Contact Us</Link>
      </div>
          <Link to="/">
                <img className="" src={expoBirdLogo} id="logo" alt="ExpoBird Logo"/>
          </Link> 
          <Nav >
            <NavItem onClick={this.shoot}>
              
                <Link className="active nav-link"  to="/our-clients">
                  Clients 
                </Link>
              
            </NavItem>  
            <NavItem  onMouseOut={this.mouseIsOut} onMouseOver={this.mouseOut}  className="dropdown" tab-index="0">
              <Link to="#" className="active nav-link">
                Services <FontAwesomeIcon icon={faCaretDown}/>
              </Link>
              <div onMouseOut={this.mouseIsOut}  className="dropdown-content service-menu" id="dropdown-contents">
                <div className="row">
                  <div className="col-6">
                    <div id="MainNav" onClick={this.shoot}>
                      <Link className="link-d" to="/digital-marketing">
                        <div className="if">
                        <div className="services-video">
                          <img src={sm} alt="Digital Marketing"/>
                        </div>
                          {/* <img width="32px" className="mb-3" src={Vfx} alt=""/> */}
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Digital Marketing</p>
                            <p className="dropdown-menu-text">Get your company name out to the public at large using Social Media.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div id="MainNav" className="mt-3" onClick={this.shoot}>
                      <Link className="link-d" to="/search-engine-optimization">
                        <div className="if">
                        <div className="services-video">
                          <img src={digimarket} alt='SEO Services'/>
                        </div>
                          {/* <img width="32px" className="mb-3" src={Photography} alt=""/> */}
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Search Engine Optimization</p>
                            <p className="dropdown-menu-text">Use your audience habit and get more traffic now.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div id="MainNav" className="mb-3" onClick={this.shoot}>
                      <Link className="link-d" to="/video-production-service">
                        <div className="if">
                        <div className="services-video">
                          <img src={videoProduction} alt="Video Editor"/>
                        </div>
                          {/* <img width="32px" className="mb-3" src={Dm} alt=""/> */}
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Video Production</p>
                            <p className="dropdown-menu-text">Our in-house fully-equipped video production team. </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div id="MainNav"  className="mt-3" onClick={this.shoot}>
                      <Link className="link-d" to="/amazon-services">
                        <div className="if">
                        <div className="services-video">
                          <img src={services5} alt="Amazon Services"/>
                        </div>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Amazon Services</p>
                            <p className="dropdown-menu-text">Build Your Business Today.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                  </div>
                  <div className="col-6">
                    <div id="MainNav" onClick={this.shoot}>
                      <Link className="link-d" to="/social-media-marketing">
                        <div className="if">
                          {/* <img width="32px" className="mb-3" src={OnlineMarketing} alt=""/> */}
                          <img className="sub-menu-video" src={OnlineMarketing} alt="Social Media Marketing"/>

                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Social Media Marketing</p>
                            <p className="dropdown-menu-text">Win the hearts of your existing and potential customers by having a presence on Facebook and other forums.</p>
                          </div>
                        </div>  
                      </Link>
                    </div>
                    <div id="MainNav" onClick={this.shoot}>
                      <Link className="link-d" to="/web-development">
                        <div className="if">
                        <div className="services-video">
                          <img src={services5} alt="Web Development"/>
                        </div>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Web & App Development</p>
                            <p className="dropdown-menu-text">A website is the digital face of your business. </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div id="MainNav" onClick={this.shoot}>
                      <Link className="link-d" to="/animation">
                        <div className="if">
                        <div className="services-video">
                          <img src={animation} alt="Animation"/>
                        </div>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Animation</p>
                            <p className="dropdown-menu-text">Convey your messages and explain your business with eye-catchy animated videos</p>
                          </div>
                        </div>
                        </Link>
                    </div>
                   
                    <div id="MainNav" onClick={this.shoot}>
                      <Link className="link-d" to="/graphic-design" >
                        <div className="if">
                        <div className="services-video">
                          <img src={graphicsDesign} alt="Graphic Designing"/>
                        </div>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings"> Graphics & Design</p>
                            <p className="dropdown-menu-text">Nothing lasts forever. And so does your graphics and design. </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </NavItem>
            {/* <NavItem onClick={this.shoot} >
              <a  className="nav-link" href="https://expobird.com/portfolio">Portfolio</a>
            </NavItem> */}
            {/* <NavItem onClick={this.shoot} >
              <Link className="nav-link" to="/case-study">Case Study</Link>
            </NavItem> */}
            {/* <NavItem>
              <Link className="nav-link" to="/about-us">About Us</Link>
            </NavItem> */}
            {/* <NavItem  className="dropdown" tab-index="0">
              
                <Link className="nav-link" to="/portfolio-section">
                  Portfolio <FontAwesomeIcon icon={faCaretDown} />
                </Link> */}
              {/* Below is the Portfolio mega menu section */}
              {/* <div className="dropdown-content" id="dropdown-contents">
                <div className="row">
                  <div className="col-6">
                  <div id="MainNav" onClick={this.shoot}>
                      <a href="https://expobird.com/Portfolio/social-media-marketing-2/">
                        <div className="if">
                          
                          <img className="sub-menu-video" src={OnlineMarketing} />

                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Social Media Marketing</p>
                            <p className="dropdown-menu-text">Win the hearts of your existing and potential customers by having a presence on Facebook and other forums.</p>
                          </div>
                        </div>  
                      </a>
                    </div>
                    <div id="MainNav" onClick={this.shoot}>
                      <a href="https://expobird.com/Portfolio/web-and-app-development/">
                        <div className="if">
                          <video className="sub-menu-video"  muted loop autoPlay>
                            <source src={services5} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                          
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Web & App Development</p>
                            <p className="dropdown-menu-text">A website is the digital face of your business. </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div id="MainNav" onClick={this.shoot}>
                      <a href="https://expobird.com/Portfolio/animation/">
                        <div className="if">
                        <video className="sub-menu-video"  muted loop autoPlay>
                            <source src={animation} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                          
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Animation</p>
                            <p className="dropdown-menu-text">Convey your messages and explain your business with eye-catchy animated videos</p>
                          </div>
                        </div>
                        </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div id="MainNav" onClick={this.shoot}>
                      <a href="https://expobird.com/Portfolio/video-production/">
                        <div className="if">
                        <video className="sub-menu-video"  muted loop autoPlay>
                            <source src={videoProduction} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Video Production</p>
                            <p className="dropdown-menu-text">Our in-house fully-equipped video production team. </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div id="MainNav" onClick={this.shoot}>
                      <a href="https://expobird.com/Portfolio/search-engine-optimization-2/">
                        <div className="if">
                        <video className="sub-menu-video"  muted loop autoPlay>
                            <source src={digimarket} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Search Engine Optimisation</p>
                            <p className="dropdown-menu-text">Use your audience habit and get more traffic now.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div id="MainNav" onClick={this.ToggleFunction}>
                      <a href="https://expobird.com/Portfolio/digital-marketing-2/">
                        <div className="if">
                        <video className="sub-menu-video"  muted loop autoPlay>
                            <source src={sm} type="video/mp4"/>
                            Your browser does not support the video tag.
                          </video>
                          <div className="ml-3">
                            <p className="dropdown-menu-headings">Digital Marketing</p>
                            <p className="dropdown-menu-text">Get your company name out to the public at large using Social Media.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </NavItem>*/}

            <NavItem onClick={this.shoot}>
              <a  className="nav-link" href="/blog">Blogs</a>
            </NavItem>
            
            <NavItem onClick={this.shoot} >
              <Link className="nav-link" to="/about-us">About Us</Link>
            </NavItem>

            <NavItem onClick={this.shoot}>
              <Link  className="nav-link" to="/contact-us">Contact Us</Link>
            </NavItem> 
            {/* {user.email==admin[0].email ? 
            
                <NavItem>
                  <Link className="active nav-link dropdown-toggle dropdownLink" id="toggler">{admin[0].name}</Link>
                  <UncontrolledCollapse toggler="#toggler">
                    <Link className='active nav-link'>Logout</Link>
                  </UncontrolledCollapse>
                </NavItem>

            :
            
              null
            
            } */}

            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        {/* </Collapse> */}
        <div id="call-icon-container">
            <span> <a href="https://wa.me/923302033334" target="_blank"><img id="whatsapp-icon"  src={whatsApp} alt="call expobird"/></a> </span>
            {/* <span><Link to="tel:+923333375061"><img  className="call-icon" src={call} alt="call expobird"/></Link></span> */}
        </div>
        <div id="menu-icon" onClick={this.openNav} className="openbtn">
          <button className="nostyling"> ☰ </button>
        </div> 
      </Navbar>
      <div className="whatsapp-icon">
        <a href="https://wa.me/923302033334" target="_blank">
        <img width="16" height="16" src={whatsapp} 
                    alt="whatsapp expobird"/></a>
        </div>
      
    </div>
  );
}

}

export default Navbars;