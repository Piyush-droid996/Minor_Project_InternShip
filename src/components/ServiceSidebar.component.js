import React from 'react';
import { Link } from 'react-router-dom';
import './assets/style/serviceTable.css';

const ServiceSidebar = () => {
    // Document.ready(()=>{
    //     window.scroll(()=>{
    //         var con4 = document.getElementById("con_4");
            
    //         var sc = window.screenTop();
    //         if (sc>300){
    //             con4.css("background", "black");
    //         }
    //         else{
    //             con4.css("background", "transparent");
    //         }
    //     })
    // })
    

    return (
        <div class="service-sidebar">
            <div class="sidebar-widget service-widget">
                <h4>All Services</h4>
                <ul>
                    <li><Link to="/services/DigitalMarketing/SEO" ><a href="/services/DigitalMarketing/SEO">SEO</a></Link></li>
                    <li><Link to="/services/DigitalMarketing/SMO" ><a href="/services/DigitalMarketing/SMO">SMO</a></Link></li>
                    <li><Link to="/services/DigitalMarketing/SMM" ><a href="/services/DigitalMarketing/SMM">SMM</a></Link></li>
                    <li><Link to="/services/DigitalMarketing/PPC" ><a href="/services/DigitalMarketing/PPC">PPC</a></Link></li>
                    <li><Link to="/services/CRO" ><a href="/services/CRO">CRO</a></Link></li>
                    <li><Link to="/services/ContentMarketing" ><a href="/services/ContentMarketing">Content Marketing</a></Link></li>
                    <li><Link to="/services/EmailMarketing" ><a href="/services/EmailMarketing">E-mail Marketing</a></Link></li>
                    <li><Link to="/services/UiUx-Design" ><a href="/services/UiUx-Design">UI/UX Design</a></Link></li>
                    <li><Link to="/services/WebDevelopement" ><a href="/services/WebDevelopement">Web Development</a></Link></li>
                    <li><Link to="/services/AppDevelopement" ><a href="/services/AppDevelopement">Mobile App Development</a></Link></li>
                    <li><Link to="/services/ProductListing" ><a href="/services/ProductListing">Product Listing</a></Link></li>
                    <li><Link to="/services/PaymentGateway" ><a href="/services/PaymentGateway">Payment Gateway</a></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebar;