import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';
import './assets/style/footer.css';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';

const Footer = () => {
    return( 
        <section class="footer-section-start">
            <div class="footer-section pt-5 position-relative overflow-hidden ">
                <div class="container respo-div position-relative zi-1">
                    <div class="row px-lg-0 px-3">
                        <div class="col-md-4 col-sm-12">
                            <div class="row  mx-0">
                                <Link to="/" ><a href='/'><img src={logo} class="logo-img" alt="footer logo" /></a></Link>
                                <ul class="footer-links list-unstyled">
                                    <div class="mb-2">
                                        <p>
                                            Since our agency was founded in 2020, “WEBHUB ZONE” has been a one-stop digital
                                            marketing
                                            agency with high competencies in Search Engine Optimisation (SEO).
                                        </p>
                                    </div>
                                </ul>
                                
                            </div>
                        </div>
                        <div class="col-lg-8 col-12">
                            <div class="row">
                                <div class="col-md-4 col-sm-12">
                                    <div class="row  mx-0">
                                        <div class="col heading fs-md-14 fs-12 left text-white mb-4 pb-2">
                                            <span class="fs-16 text-uppercase">Quick <b> Links</b></span>
                                        </div>
                                        <ul class="footer-links list-unstyled">
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to ="/">
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Home
                                                </a>
                                                </Link>
                                            </li>
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/about-us">
                                                <a class="text-decoration-none ps-0" href="/">
                                                    About Us
                                                </a>
                                                </Link>
                                            </li>
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/pricing/DigitalMarketing" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Pricing
                                                </a>
                                                </Link>
                                            </li>
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/services" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Services
                                                </a>
                                                </Link>
                                            </li>
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/contact" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Contact Us
                                                </a>
                                                </Link>
                                            </li>
                                            <li><i class="fa fa-light fa-xs fa-chevron-down"> </i>    
                                                <Link to="/" >                                     
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Blogs
                                                </a>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-12">
                                    <div class="row  mx-0">
                                        <div class="col heading fs-md-14 fs-12 left text-white mb-4 pb-2">
                                            <span class="fs-16 text-uppercase">Our Services</span>
                                        </div>
                                        <ul class="footer-links list-unstyled">
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/services/DigitalMarketing/SEO" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Digital Marketing
                                                </a>
                                                </Link>
                                            </li>
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/services/ProductListing" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Product Listing
                                                </a>
                                                </Link>
                                            </li>
                                            <li class="mb-2">
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i> 
                                                <Link to="/services/WebDevelopement" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Development
                                                </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i class="fa fa-light fa-xs fa-chevron-down"> </i>  
                                                <Link to="/services/PaymentGateway" >
                                                <a class="text-decoration-none ps-0" href="/">
                                                    
                                                    Payment Gateway
                                                </a>
                                                </Link>
                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            
                                <div class="col-lg-4 col-12">
                                    <div class="row  mx-0">
                                        <div class="col">
                                            <div class="col heading fs-md-14 fs-12 left text-white mb-4 pb-2">
                                                <span class="fs-16 text-uppercase">Contact <b> Info</b></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row  mx-0">
                                        <div class="col-md-12 col-sm-12 pb-3 ps-0">
                                            <div class="row fs-14">
                                                <div class="col-auto">
                                                    <i class="fa fa-home mr-3 "></i>
                                                </div>
                                                <div class="col">2nd Floor, C 9/9, Chitrakoot Marg, Sector 9, Vaishali Nagar,
                                                    Jaipur,
                                                    Rajasthan 302021</div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12 pb-3 ps-0 mt-3">
                                            <div class="row fs-14">
                                                <div class="col-auto">
                                                    <i class="fa fa-phone mr-3 "> </i> 
                                                </div>
                                                <div class="col">9929921411, 7300003687</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="last-footer">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <p class="text-md-end text-center">©2021- <span>2022</span> Let's Go. All rights Reserved
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <p class="footer_link text-md-start text-center">
                                        <a class="text-decoration-none text-white" href="/" target="_blank">Privacy Policy</a> |
                                        <a class="text-decoration-none text-white" href="/" target="_blank">Terms &amp;
                                            Conditions</a> |
                                        <a class="text-decoration-none text-white" href="/" target="_blank">Disclaimer</a>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer;