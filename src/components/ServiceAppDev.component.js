import React, {useEffect} from 'react';
// import './assets/style/serviceTable.css';
import ServiceSidebar from './ServiceSidebar.component';
import WebmMobileAppDev from './assets/svg_image/Animations/mobile-app-dev.webm';

const ServiceAppDev = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
       <section class="page-banner">
            <div class="container">
                <div class="banner-content">
                    <h2>Mobile App Development</h2>
                </div>
            </div>
        </section>
        {/* <!------------2nd section-------------> */}
        <section class="service-details pt-120 rpt-100 pb-115 rpb-95">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <ServiceSidebar/>
                    </div>
                    <div class="col-lg-8">
                        <div class="service-details-content">
                            <h2>Mobile App Development</h2>
                            <p>Mobile app development is the process of creating software applications for mobile devices,
                                which typically utilises network connections to access remote computing resources.
                                Mobile development Includes building a software bundle that can be installed, implementing
                                backend services such as APIs, and testing the application on target devices.
                                Webhubzone is a one-stop mobile app solution for all businesses. We help not only Indian but
                                also global brands design and make superior digital products enabling seamless Indian
                                customer experiences across all modern platforms and devices.
                                We offer a full cycle of application design, integration, and management services, ranging
                                from consumer-oriented apps to enterprise-class solutions from concept to delivery, to
                                ongoing support, the company leads the entire mobile app development process.

                            </p>

                            <div class="work-part-content">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="work-left">
                                            <div class="work-webm">
                                                <video playsInline autoPlay muted loop>
                                                    <source src={WebmMobileAppDev} type='video/webm' />
                                                </video>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="work-content">
                                            <h2>Webhubzone Mobile App Development Services In India</h2>
                                            <p>Cross-platform app development, App Porting, Maintenance and support, App
                                                Designing & development, App Strategy Action and End-to-end mobile app
                                                development services for IOS.
                                                Android and windows, Mobile App UI Design, Native App Development, Support
                                                and maintenance, Enterprise mobility solutions, Building hybrid mobile
                                                applications.

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>Our App Development Process</h2>
                            <p>Our company uses adequate technology and infrastructure to develop your app and make changes
                                from time to time to match the market trends, which also affects how we roll out the
                                app.<br/>
                                Performs app development process using the latest trends and incorporates themes, along with
                                marketing research, and app design.
                            </p>
                            <h5>Steps of the App Development Process</h5>
                            <ol>
                                <li> Make a map and target-based strategy</li>
                                <li>Outline competing solutions</li>
                                <li>Decide on the best </li>
                                <li> Put up a realistic prototype</li>
                                <li>Test with the target-based Indian customers</li>

                            </ol>
                            <h2> What Does Webhubzone Do For Your Project? </h2>
                            <ol>
                                <li>End-to-end mobile app development services for IOS</li>
                                <li> Mobile app UI/UX designing</li>
                                <li> Enterprise mobility solutions</li>
                                <li> Cross-platform app development</li>
                                <li> Integrates into your mobile application development to launch and infrastructure</li>
                                <li>Build your hybrid mobile application</li>
                                <li> We create a progressive web application</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="faq">
            <div class="faq-container">
                <h3>FAQ(Frequency Asked Questions)</h3>
                <div class="accordion">
                    <div class="accordion-item" id="question1">
                        <a class="accordion-link" href="#question1"> What type of industry and region apps does Webhubzone
                            work on?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Industries we serve are fintech, social networking, Indian lifestyle, travel, Health and
                                fitness, entertainment, tech, start-ups and many more.

                            </p>

                        </div>
                    </div>
                    <div class="accordion-item" id="question2">
                        <a class="accordion-link" href="#question2">What do you mean by mobile app development?

                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p> Mobile application development is a great process of creating applications that run on
                                mobile devices. These apps can either be pre-installed or downloaded and installed by the
                                Indian user.<br/>
                                The mobile app development process uses software installed on the device, and through APIs.
                                Enabling backend services for data access and testing the application on target devices is
                                also required.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
    )
}

export default ServiceAppDev;