import React from 'react';
import {Link} from "react-router-dom";
import { ImArrowUp } from 'react-icons/im';

const BlogTemplate = ({increase, increaseDescription,image,btnTXT,links}) => {
    return ( 
        <div>
            <div className="col-12 mt-5 mb-5 BlogContent-bg">
                <div className="row align-items-center"> 
                    <div className="col-12 col-lg-6 p-4 p-md-5 order-12 order-sm-12 order-md-12 order-lg-1 order-xl-1">
                        <div className="">
                            <div className="row">
                                <div className="col-4">                               
                                    <h4 className="text-left">{increase} <span className="growUp"><ImArrowUp/></span></h4>
                                    <p>{increaseDescription}</p>                    
                                </div>
                                <div className="col-4">                               
                                    <h4 className="text-left ">{increase}<span className="growUp"><ImArrowUp/></span></h4>
                                    <p>{increaseDescription}</p>
                                </div>
                                <div className="col-4">                               
                                    <h4 className="text-left ">{increase}<span className="growUp"><ImArrowUp/></span></h4>
                                    <p>{increaseDescription}</p>                    
                                </div>
                            </div>
                            <a href={links}>
                                <button className="rf  ">{btnTXT}</button>
                            </a>
                        </div>
                    </div>
                    <div className="text-center col-12 col-lg-6  text-center order-1 order-sm-1 order-md-1 order-lg-12 order-xl-12 ">
                         <img src={image}  className="CaseStudyLogo "/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogTemplate;