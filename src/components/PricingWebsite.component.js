import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/pricing_table.css';

const PricingWebsite = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <section class="table-section">
            <div class="container-fluid">
            <div class="container-pricing-table">
                    <div class="container-heading">
                        <h1 >Website Designing and Development Packages</h1>
                        <p>Our company, Webhubzon is a leading provider of website design and
                            development services in India. We provide the best quality responsive and dynamic websites to
                            make your online presence and generate revenue. We provide various affordable website design
                            packages as per your need. Our team of experts will analyze your requirements and make a
                            proposal based on what you need.      </p>
                    </div>
                    <div class="pricing-area ">
                        <div class="row">
                            {/* <!----------1st package start-------------> */}
                            <div class="col-sm-4">
                                <div class="price-table">
                                    <div class="price-head">
                                        <h4>Basic Website Design</h4>
                                        <h6>₹ 165 / 11999 INR</h6>
                                    </div>
                                    <div class="price-content">
                                        <ul>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 1 Domain Name for 1
                                                Year</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Shared Web Hosting
                                                for 1 Year</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Free Theme or Paid(By
                                                Customer)</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> HTML/Core PHP/CMS
                                                Wordpress</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 05 Business Email
                                                Accounts</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 1 Theme Based Logo
                                                Designing</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Attractive Home Page
                                                Designing</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Hot/Featured Product
                                                Display on Home Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Up to 10 Informative
                                                Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> About Us/Company
                                                Profile/Terms & Conditions Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Contact Us/Enquiry
                                                Page/Quick Enquiry</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                                Integration</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Sitemap.xml &
                                                Robots.txt File Upload</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Dynamic Blog Page
                                                with CMS</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Social Media Follow
                                                Us Links (<i class="fa fa-facebook clrfac"></i> <i
                                                    class="fa fa-twitter clrtwi"></i> <i class="fa fa-linkedin clrli"></i>
                                                <i class="fa fa-google-plus clrg2"></i>)
                                            </li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Web Mail Login from
                                                Website</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine
                                                Friendly Web Pages</li>

                                            <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            {/* <!-----------1st end---------------->
                            <!---------------2nd start---------------> */}
                            <div class="col-sm-4">
                                <div class="price-table">
                                    <div class="price-head">
                                        <h4>Standard</h4>
                                        <h6>₹ 300 / 21999 INR</h6>
                                    </div>
                                    <div class="price-content">
                                        <ul>

                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 1 Domain Name for 1
                                                Year</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Shared Web Hosting
                                                for 1 Year</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Free Theme or Paid(By
                                                Customer)</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 10 Business Email
                                                Accounts</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 1 Theme Based Logo
                                                Designing</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Attractive Home Page
                                                Designing</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Hot/Featured Product
                                                Display on Home Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Unlimited Category
                                                Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Unlimited
                                                Products/Services Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Products/Services
                                                Search Bar</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> About Us/Company
                                                Profile/Terms & Conditions Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Contact Us/Enquiry
                                                Page with Google Location Map</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Our Clients Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Client Testimonials
                                                Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Career/Current Jobs
                                                Opening Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Company News Page
                                            </li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Company Videos Page
                                            </li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Company Photo Gallery
                                                Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Social Media Follow
                                                Us Links (<i class="fa fa-facebook clrfac"></i> <i
                                                    class="fa fa-twitter clrtwi"></i> <i class="fa fa-linkedin clrli"></i>
                                                <i class="fa fa-google-plus clrg2"></i>)
                                            </li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Web Mail Login from
                                                Website</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine
                                                Friendly Web Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytic
                                                Integration</li>
                                            <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Dynamic
                                                    Admin/Control
                                                    Panel Features</strong></li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Home Page &
                                                Other Page Content</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage
                                                Categories/Products Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Hot/Featured
                                                Products</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Orders &
                                                Customer Details</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Client
                                                Testimonials Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Career/Current
                                                Jobs Opening Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Meta Tags
                                                (Title,Description And Keywords)</li>
                                                <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!-----------------2nd end------------------>
                            <!---------------3rd start--------------------> */}
                            <div class="col-sm-4">
                                <div class="price-table">
                                    <div class="price-head">
                                        <h4>Professional</h4>
                                        <h6>₹ 560 / 35999 INR</h6>
                                    </div>
                                    <div class="price-content">
                                        <ul>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 1 Domain Name for 1
                                                Year</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Shared Hosting for 1
                                                Year</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 10 Business Email
                                                Accounts</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> 1 Theme Based Logo
                                                Designing</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Customized Home Page
                                                Designing</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Hot/Featured Product
                                                Display on Home Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Unlimited Category
                                                Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Unlimited
                                                Products/Services Pages</li>
                                            <li class="ami-price"><i class="fa fa-check  clrright"></i> Products/Services
                                                Search Bar</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> About Us/Company
                                                Profile/Terms & Conditions Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Contact Us/Enquiry
                                                Page with Google Location Map</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Our Clients Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Client Testimonials
                                                Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Career/Current Jobs
                                                Opening Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Language Converter
                                                Facility</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Social Media Follow
                                                Us Links (<i class="fa fa-facebook clrfac"></i> <i
                                                    class="fa fa-twitter clrtwi"></i> <i class="fa fa-linkedin clrli"></i>
                                                <i class="fa fa-google-plus clrg2"></i>)</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine
                                                Friendly Web Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytic
                                                Integration</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Attractive Product
                                                final page with zooming option</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Customer
                                                Login/Signup/Forgot Password Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Add to Cart Option
                                            </li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Update Cart Option
                                            </li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Checkout Option</li>
                                            <li class="ami-price" >
                                                <i class="fa fa-hand-o-right"></i><strong> Member Folder Features</strong></li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Update Profile</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Order</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Change Password</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Logout</li>
                                            <li class="ami-price" >
                                                <i class="fa fa-hand-o-right"></i><strong> Dynamic Admin/Control Panel Features</strong></li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Users</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Orders</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Website Page
                                                Content</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage
                                                Categories/Products Pages</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Hot/Featured
                                                Products</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Client
                                                Testimonials Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Career/Current
                                                Jobs Opening Page</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Payment Gateway
                                                Integraion</li>
                                            <li class="ami-price"><i class="fa fa-check clrright"></i> Manage Meta Tags
                                                (Title,Description And Keywords)</li>
                                            <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <!----------------3rd end------------------------> */}

                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default PricingWebsite;