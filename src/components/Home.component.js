import React, {useEffect} from "react";
//import logo from "./images/logo.png"
import { useNavigate, Link } from "react-router-dom";
import './assets/style/home.css';
// import Webmgetintouch from './assets/svg_image/Animations/getintouch.webm';

import WebmSpaceAnimation from './assets/svg_image/Animations/spaceanimation.webm';
import WebmAboutus from './assets/svg_image/Animations/Aboutus.webm';
import WebmGetinTouch from './assets/svg_image/Animations/getintouch.webm';
// Founders
import PngBhagirathSir from './assets/images/Team_Images/Bhagirath_01.png';
import PngVinodSir from './assets/images/Team_Images/Vinod_01.png';
import PngKishanSir from './assets/images/Team_Images/Kishan_01.png';
//  Team Members
import PngAanchal_01 from './assets/images/Team_Images/Aanchal_01.png';
import PngAniket_01 from './assets/images/Team_Images/Aniket_01.png';
import PngAjay_01 from './assets/images/Team_Images/Ajay_01.png';
import PngAwan_01 from './assets/images/Team_Images/Awan_01.png';
import PngBhawar_01 from './assets/images/Team_Images/Bhawar_01.png';
import PngHarshita_01 from './assets/images/Team_Images/Harshita_01.png';
import PngHimanshu_01 from './assets/images/Team_Images/Himanshu_01.png';
import PngJitesh_01 from './assets/images/Team_Images/Jitesh_01.png';
import PngNikhil_01 from './assets/images/Team_Images/Nikhil_01.png';
import PngPiyush_01 from './assets/images/Team_Images/Piyush_01.png';
import PngRohit_01 from './assets/images/Team_Images/Rohit_01.png';
import PngSanjay_01 from './assets/images/Team_Images/Sanjay_01.png';
import PngShalini_01 from './assets/images/Team_Images/Shalini_01.png';
import PngSimran_01 from './assets/images/Team_Images/Simran_01.png';
import PngUma_01 from './assets/images/Team_Images/Uma_01.png';
import PngVikas_01 from './assets/images/Team_Images/Vikas_01.png';
// Slide Show Images
// import prdctlist from './assets/images/prdctlist.jpg';
// import conversion_rate from './assets/images/conversion-rate.jpg';
// import media_jpg from './assets/images/media.jpg';
// import UXUI_Service from './assets/images/App_Service.png';

const Home = () =>{
    useEffect(() => {
        if(window.pageYOffset>0){
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
      }, []);
    // var [checkAdmin, setCheckAdmin] = React.useState(false);
    // const localUser = JSON.parse(localStorage.getItem('user'));
    // if(localUser && localUser.isAdmin){
    //     setCheckAdmin(localUser.isAdmin);
    // }

    const navigate = useNavigate();

    return(
        <div>
            {/* <div class="slider-show">
                <div class="figure">
                    <img src={prdctlist} alt="prdctlist" />
                    <img src={media_jpg} alt="media" />
                    <img src={UXUI_Service} alt="UXUI_Service" />
                    <img src={conversion_rate} alt="conversion-rate" />
                </div>
            </div> */}
            <div class=" parallax-hero ">
                <section id="hero " class="hero-slideshow-wrapper hero-slideshow-fullscreen ">
                    <div class="containerHeading ">
                        <div class="row hero__content hero-content-style2 ">
                            <div class="col-md-11 col-lg-6 ">
                                <div class="hcl2-content ">
                                    <p class="TopSubHeading ">We Build Up Your Business
                                    </p>
                                    <h1 class="MainHeading ">
                                        WEBSITE DESIGNING
                                    </h1>
                                    <p class="MainSubHeading ">We bring out the best in brands, design fluid experiences,<br /> and grow your website through bright marketing
                                    </p>
                                    <p class="MainHeadingBtn "><Link to="/about-us" ><a class="btn-hero " href="/about-us">About
                                                Us</a></Link></p>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6 ">
                                <video width="100% " autoPlay muted loop playsInline>
                                        <source src={WebmSpaceAnimation}
                                            type="video/mp4 "/>
                                    </video>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- Main Heading Ends-->

            <!-- Features Start--> */}

            <section id="feature-section-web">
                <div class="home-feature-container">
                    <div class="home-feature-heading">
                        <h6>WHY CHOOSE US</h6>
                        <h2>FEATURES</h2>
                    </div>
                    <div class="home-feature-elements">
                        <div class="row-elements">
                            <div class="features-item">
                                <div class="features-icon">
                                    <span class="fa fa-stack fa-4x">
                                        <i class="fa fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-solid fa-laptop fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="features-heading">
                                    <h4>Faster And Responsive Website</h4>
                                </div>
                                <div class="features-content">
                                    <p>We are getting better creative & digital marketing services and online advertising
                                        practices to gain a competitive edge over other companies in India and worldwide through
                                        SEO.
                                    </p>
                                </div>
                            </div>
                            <div class="features-item">
                                <div class="features-icon">
                                    <span class="fa fa-stack fa-4x">
                                        <i class="fa fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-solid fa-lock fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="features-heading">
                                    <h4>User-Friendly & Secure Website</h4>
                                </div>
                                <div class="features-content">
                                    <p>
                                        Website development services can help you market your product digitally, make your
                                        company internet savvy, and engage customers to increase sales.
                                    </p>
                                </div>
                            </div>
                            <div class="features-item">
                                <div class="features-icon">
                                    <span class="fa fa-stack fa-4x">
                                        <i class="fa fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-solid fa-search fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="features-heading">
                                    <h4>Strong Visual Branding And SEO Content</h4>
                                </div>
                                <div class="features-content">
                                    <p>
                                        The idea is that the solution to increasing digital marketing KPIs is to boost your
                                        sales and social sharing like Facebook promotions, e-mail marketing, content marketing,
                                        etc.
                                    </p>
                                </div>
                            </div>
                            <div class="features-item">
                                <div class="features-icon">
                                    <span class="fa fa-stack fa-4x">
                                        <i class="fa fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="fa fa-solid fa-comments fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                                <div class="features-heading">
                                    <h4>Comprehensive online marketing packages</h4>
                                </div>
                                <div class="features-content">
                                    <p>
                                        Social media marketing is a great way to build your brand and reach new customers. There
                                        are many ways to do this, such
                                        as media management, SEO, and SMO,
                                        as well as getting your product
                                        listing.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- about us --> */}
            <section id="about">
                <div class="home-about-container">
                    <div class="home-feature-heading">
                        <div class="aboutus-webm-contant">
                            <div class="section-desc">
                                <h6>Who We Are</h6>
                                <h2>About Us</h2>
                                <p>Since our agency was founded in 2020, <b>“WEBHUB ZONE”</b> has been a one-stop digital
                                    marketing agency with high competencies in Search Engine Optimisation (SEO), Web design
                                    &amp; development, content Creation, Search Engine Marketing (SEO), Digital Marketing
                                    (Creative Design tool, Brand marketing, Design solution), Website E-commerce, and Social
                                    Media Management (SMM).</p>
                            </div>
                            <div class="about-us-webm">
                                <video autoPlay muted loop playsInline>
                                    <source src={WebmAboutus} type='video/webm' />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about us end -->
            <!-- service start --> */}
            <section id="service-section-web">
                <div class="home-feature-container">
                    <div class="home-feature-heading">
                        <h6>CHECK OUR SERVICES</h6>
                        <h2>SERVICES</h2>
                    </div>
                    <div class="home-feature-elements">
                        <div class="row-elements">
                            <a href='/services/DigitalMarketing/SEO'><Link to="/services/DigitalMarketing/SEO">
                                <div class="service-item">
                                    <div class="service-icon">
                                        <i class="fa fa fa-search fa-5x"></i>
                                    </div>
                                    <div class="service-heading">
                                        <h4>Digital Marketing</h4>
                                    </div>
                                </div>
                                </Link>
                            </a>
                            <Link to="/services/ProductListing"><a href='/'>
                                <div class="service-item">
                                    <div class="service-icon">
                                        <i class="fa fa fa-code fa-5x "></i>
                                    </div>
                                    <div class="service-heading">
                                        <h4>Product Listing</h4>
                                    </div>
                                </div>
                            </a></Link>
                            <Link to="/services/WebDevelopement" ><a href='/'>
                                <div class="service-item">
                                    <div class="service-icon">
                                        <i class="fa fa fa-pencil-square-o fa-5x"></i>
                                    </div>
                                    <div class="service-heading">
                                        <h4>Web Development</h4>
                                    </div>
                                </div>
                            </a></Link>
                            <Link to="/services/PaymentGateway" ><a href='/'>
                                <div class="service-item">
                                    <div class="service-icon">
                                        <i class="fa fa fa-credit-card-alt fa-5x"></i>
                                    </div>
                                    <div class="service-heading">
                                        <h4>Payment Gateway</h4>
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- services end -->
            <!--  -->
            <!-- =================================== MEET OUR FOUNDERS ============================= --> */}

            <section class="team ">
                <h2> OUR FOUNDERS</h2>
                <div class=" container team__container ">
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngKishanSir} alt="Kishan Jakhar" />
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Kishan Jakhar</h4>
                            <p class="h4_style ">Director/CMO</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="/" target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="/" target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/kishan-jakhar/ " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngVinodSir} alt="Vinod Parihar" />
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Vinod Parihar</h4>
                            <p class="h4_style ">CEO</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="/" target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="/" target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/vinod-parihar " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngBhagirathSir} alt="Bhagirath Singh" />
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Bhagirath Singh </h4>
                            <p class="h4_style ">Senior Manager</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="/" target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="/" target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/bhagirath-singh-3590031ba " target="_blank "><i
                                    class="fa fa-linkedin "></i>
                            </a>
                        </div>
                    </article>
                </div>
            </section>
            {/* <!-- founder section end -->
            <!-- =================================== MEET OUR TEAM ============================= --> */}

            <section class="team ">
                <h2 class="h2_style">OUR TEAM</h2>
                <div class="container team__container1 ">
                    <article class="team__member ">
                        <div class="team__member-image">
                            <img src={PngSanjay_01} alt="sanjay" />
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Sanjay Bhardwaj</h4>
                            <p class="h4_style ">Web Analytics</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="/" target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="/" target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://linkedin.com " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image">
                            <img src={PngAniket_01} alt="aniket_raj"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Aniket Raj</h4>
                            <p class="h4_style ">Team Leader</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://linkedin.com " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngHimanshu_01} alt="Himanshu Yaduvanshi"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Himanshu Yaduvanshi</h4>
                            <p class="h4_style ">Graphic Designer </p>
                        </div>
                        <div class="team__member-socials ">
                            <a href="https://twitter.com/home " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedinin.com//himanshu-yaduvanshi-35522122b " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngRohit_01} alt="Rohit Sharma"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Rohit Sharma</h4>
                            <p class="h4_style ">Seo</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/rohit-sharma-79951019b " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngNikhil_01} alt="Nikhil Sharma"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Nikhil Sharma</h4>
                            <p class="h4_style ">Operation Coordinator Manager</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/nikhil-sharma-09051b242/ " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngBhawar_01} alt="Jyotiraditya Rathore"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Bhanwar Jyotiraditya Rathore</h4>
                            <p class="h4_style ">Operation Manager</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/bhanwer-jyotiraditya-rathore-158653190 " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngVikas_01} alt="Vikas Singh"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Vikas Singh</h4>
                            <p class="h4_style ">Social Media Manager </p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/vikas-singh-322168238/ " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngAwan_01} alt="Awan Roy"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Awan Roy</h4>
                            <p class="h4_style ">Content Writer</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/awan-roy-a06a07236 " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngUma_01} alt="Uma kanwar Parmar"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Uma kanwar Parmar</h4>
                            <p class="h4_style ">Content Writter</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/umakanwarparmar " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngJitesh_01} alt="Jitesh Kumar"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Jitesh Kumar</h4>
                            <p class="h4_style ">Backend Developer</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href=" https://www.linkedin.com/in/jitesh-suthar/ " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngShalini_01} alt="Shalini Singh"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Shalini Singh</h4>
                            <p class="h4_style "> Web Developer</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/shalini-singh-74b1a6240/ " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngPiyush_01} alt="Piyush Saxena"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Piyush Saxena</h4>
                            <p class="h4_style ">Front-End Developer</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://linkedin.com " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image " >
                            <img src={PngAjay_01} alt="Ajay Sharma"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style ">Ajay Sharma</h4>
                            <p class="h4_style ">Video Editor</p>
                        </div>
                        <div class="team__member-socials ">

                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://linkedin.com " target="_blank "><i class="fa fa-linkedin "
                                    ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngAanchal_01} alt="Aanchal Shekhawat"/>
                        </div>
                        <div class=" team__member-info ">
                            <h4 class="h4_style ">Aanchal Shekhawat</h4>
                            <p class="h4_style ">Relationship Manager</p>
                        </div>
                        <div class="team__member-socials ">
                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/aanchal-shekhawat-b01289249 " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngHarshita_01} alt="Harshita Sahajwani"/>
                        </div>
                        <div class="team__member-info ">

                            <h4 class="h4_style ">Harshita Sahajwani</h4>
                            <p class="h4_style ">Relationship Manager</p>
                        </div>
                        <div class="team__member-socials ">
                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/harshita-sahajwani-131816253 " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                    <article class="team__member ">
                        <div class="team__member-image ">
                            <img src={PngSimran_01} alt="Simran Sharma"/>
                        </div>
                        <div class="team__member-info ">
                            <h4 class="h4_style "> Simran Sharma</h4>
                            <p class="h4_style ">Relationship manager</p>
                        </div>
                        <div class="team__member-socials ">
                            <a href="# " target="_blank ">
                                <i class='fa fa-twitter'></i>
                            </a>
                            <a href="# " target="_blank "><i class="fa fa-instagram " ></i></a>
                            <a href="https://www.linkedin.com/in/simran-sharma-9a6a31253 " target="_blank "><i
                                    class="fa fa-linkedin " ></i></a>
                        </div>
                    </article>
                </div>
            </section>
            {/* <!-- team section end -->
            <!--Section Get in Touch Start--> */}

            <section class="get-in-touch">
                <div class="home-feature-heading">
                    <h6>Contact Us</h6>
                    <h2>Get In Touch</h2>
                    <div class="get-in-touch-section">

                        <div class="video-get-in-touch">
                            <div class="get-webm">
                                <video autoPlay muted loop playsInline>
                                    <source src={WebmGetinTouch} type='video/webm' />
                                </video>
                            </div>
                            <div class="ready-to-boom">
                                <h5>We are ready to boom your business to the next move</h5>
                                <p>Share your needs with us and discover how we can help you to achieve your business goals
                                    through
                                    digital marketing in just 30 minutes.</p>
                                <button onClick={()=>{ navigate("/contact")}} class="get-in-touch-button">Contact Us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;