import React, { useState } from "react";
import logo from "./assets/images/logo.png"
import { Link, useNavigate } from "react-router-dom";
import './assets/style/nav.css';
// import Logout from "./logout.component";




const Nav = () => {
    // var checkAdmin = false;
    // const localUser = JSON.parse(localStorage.getItem('user'));
    // if(localUser && localUser.isAdmin){
    //     checkAdmin= localUser.isAdmin;
    // }
    const navigate = useNavigate();
    const [expandclicked, setExpandclicked] = useState(false);


    return(
        <header>
        <div class="container4">
            <div class="logo">
                <Link to="/" onClick={()=>{ setExpandclicked(false)}}><img class="img_logo " src={logo} alt="logo" /></Link>
            </div>
            <nav>
                <ul className={expandclicked ? "mobile-active":""}>
                    <li> <Link to="/" onClick={()=>{ setExpandclicked(false)}}><button onClick={()=>{navigate("/")}} class="navbar_items"><a href="/" class="s1 "> Home</a></button></Link>
                    </li>
                    <div class="dropdown_service">
                        <Link to="/services" onClick={()=>{ setExpandclicked(false)}}><button onClick={()=>{navigate("/services")}} class="navbar_items"><a href="/services">Service </a><i
                                class={expandclicked ? "":"fa fa-light fa-xs fa-chevron-down"}></i></button></Link>
                        <div class="megamenu">

                            <div class="megamenu-items">
                                <h3>Digital Marketing</h3>
                                <ul>
                                    <li>
                                        <Link to="/services/DigitalMarketing/SEO" ><a class="megamenu-a" href="/services/DigitalMarketing/SEO">Search Engine Optimisation
                                        </a></Link>
                                    </li>
                                    <li>
                                        <Link to="/services/DigitalMarketing/PPC"><a class="megamenu-a" href="/services/DigitalMarketing/PPC" >Pay Per Click</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/services/ContentMarketing" ><a class="megamenu-a" href="/services/ContentMarketing">Content Marketing</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/services/EmailMarketing" ><a class="megamenu-a" href="/services/EmailMarketing">E-mail Marketing</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/services/DigitalMarketing/SMM"><a class="megamenu-a" href="/services/DigitalMarketing/SMM">Social Media Marketing</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div class=" megamenu-items ">
                                <h3>Development</h3>
                                <ul>
                                    <li>
                                        <Link to="/services/WebDevelopement" ><a class="megamenu-a" href="/services/WebDevelopement">Website Development</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/services/AppDevelopement" ><a class="megamenu-a" href="/services/AppDevelopement">App Development</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/services/UiUx-Design"><a class="megamenu-a" href="/services/UiUx-Design"> UX/UI Designer</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div class=" megamenu-items ">
                                <h3>Payment</h3>
                                <ul>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">RazorPay</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">PayU</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">CashFree</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Paytm</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Mobikwik</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="megamenu-items">
                                <h3>E-commerce Account Management</h3>
                                <ul>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Flipkart </a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Meesho </a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Amazon</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Ajio</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a class="megamenu-a" href="/">Myntra</a></Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <li>
                        <Link to="/about-us" onClick={()=>{ setExpandclicked(false)}}><button onClick={()=>{navigate("/about-us")}} class="navbar_items"><a href="/about-us" class="s1 ">About</a></button></Link>
                    </li>
                    <div class="dropdown_service">
                        <Link to="/pricing" onClick={()=>{ setExpandclicked(false)}}><button onClick={()=>{ navigate("/pricing") }} class="navbar_items"><a href="/pricing">Pricing </a><i
                                class={expandclicked ? "":"fa fa-light fa-xs fa-chevron-down"}></i></button></Link>
                        <div class="megamenu-price">
                            <Link to="/pricing/DigitalMarketing"><div onClick={()=>{ navigate("/pricing/DigitalMarketing") }} class="megamenu-items megamenu-a">
                                Digital Marketing
                            </div></Link>
                            <Link to="/pricing/WebPackages"><div onClick={()=>{ navigate("/pricing/WebPackages") }} class=" megamenu-items megamenu-a">
                                Website Designing Packages
                            </div></Link>
                            <Link to="/pricing/ContentWriting"><div onClick={()=>{ navigate("/pricing/ContentWriting") }} class="megamenu-items megamenu-a">
                                Content Writing Packages
                            </div>
                            </Link>
                        </div>
                    </div>
                    <li> <Link to="/" onClick={()=>{ setExpandclicked(false)}}><button onClick={()=>{navigate("/")}} class="navbar_items"><a href="/" class="s1 "> Blog</a></button></Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={()=>{ setExpandclicked(false)}}><button onClick={()=>{navigate("/contact")}} class="navbar_items"><a href="/contact" class="s1 ">Contact</a></button></Link>
                    </li>

                </ul>
                
           
            </nav>
            <div id="mobile-navbar" onClick={() => { setExpandclicked(!expandclicked);}}>
                <i id="bar" className={expandclicked ? "fa fa-times":"fa fa-bars" }></i>
            </div>
            
        </div>
    </header>
    )
}

export default Nav;