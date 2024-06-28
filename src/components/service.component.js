import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import WebmService from './assets/svg_image/Animations/service.webm';
import PngProductService from './assets/svg_image/Service_images/Product_Service.png';
import PngSMOService from './assets/svg_image/Service_images/SMO_Service.png';
import PngSEOService from './assets/svg_image/Service_images/SEO_Service.png';
import PngSMMService from './assets/svg_image/Service_images/SMM_Service.png';
import PngPPCService from './assets/svg_image/Service_images/PPC_Service.png';
import PngCROService from './assets/svg_image/Service_images/CR0_Service.png';
import PngEmailService from './assets/svg_image/Service_images/E-mail_Service.png';
import PngContentService from './assets/svg_image/Service_images/Content_Service.png';
import PngAppService from './assets/svg_image/Service_images/App_Service.png';
import PngWebService from './assets/svg_image/Service_images/Web_Service.png';
import PngUXUIService from './assets/svg_image/Service_images/UXUI_Service.png';
import PngPaymentService from'./assets/svg_image/Service_images/Payment_Service.png';

import './assets/style/service.css';

const Service = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const navigate = useNavigate();

    return (
        <section id="services-shortcut">
            <div class="short-service-heading">
                <div class="service-desc">
                    <video playsInline autoPlay muted loop>
                        <source src={WebmService} type='video/webm' />
                    </video>
                </div>
            </div>

            <div class="wrapper">
                <div class="single-service">
                    <div class="social">
                        <img src={PngProductService} alt="Product Listing" />
                    </div>
                    <span></span>
                    <h3>Product Listing</h3>
                    <button onClick={()=>{navigate("/services/ProductListing")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngSMOService} alt="SMO" />
                    </div>
                    <span></span>
                    <h3>Social Media Optimisation</h3>
                    <button onClick={()=>{navigate("/services/DigitalMarketing/SMO")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngSEOService} alt="SEO" />
                    </div>
                    <span></span>
                    <h3>Search Engine Optimisation</h3>
                    <button onClick={()=>{navigate("/services/DigitalMarketing/SEO")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngSMMService} alt="SMM" />
                    </div>
                    <span></span>
                    <h3>Social Media Marketing</h3>
                    <button onClick={()=>{navigate("/services/DigitalMarketing/SMM")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngPPCService} alt="PPC" />
                    </div>
                    <span></span>
                    <h3>Pay Per Click</h3>
                    <button onClick={()=>{navigate("/services/DigitalMarketing/PPC")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngCROService} alt="CRO" />
                    </div>
                    <span></span>
                    <h3>Conversion Rate optimization</h3>
                    <button onClick={()=>{navigate("/services/CRO")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngEmailService} alt="Email" />
                    </div>
                    <span></span>
                    <h3>Email-Marketing</h3>
                    <button onClick={()=>{navigate("/services/EmailMarketing")}} btn btn-sm class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngContentService} alt="content marketing" />
                    </div>
                    <span></span>
                    <h3>Content-Marketing</h3>
                    <button onClick={()=>{navigate("/services/ContentMarketing")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngAppService} alt="APP" />
                    </div>
                    <span></span>
                    <h3>App development</h3>
                    <button onClick={()=>{navigate("/services/AppDevelopement")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngWebService} alt="web" />
                    </div>
                    <span></span>
                    <h3>Website-Development</h3>
                    <button onClick={()=>{navigate("/services/WebDevelopement")}} class="button-service">Know More</button>
                </div>
                <div class="single-service">
                    <div class="social">
                        <img src={PngUXUIService} alt="UX/UI" />
                    </div>
                    <span></span>
                    <h3>UX/UI Designer</h3>
                    <button onClick={()=>{navigate("/services/UiUx-Design")}} class="button-service">Know More</button>
                </div>

                <div class="single-service">
                    <div class="social">
                        <img src={PngPaymentService} alt="Payment" />
                    </div>
                    <span></span>
                    <h3>Payment-Gateway</h3>
                    <button onClick={()=>{navigate("/services/PaymentGateway")}} class="button-service">Know More</button>
                </div>
            </div>
        </section>
    )
}

export default Service;