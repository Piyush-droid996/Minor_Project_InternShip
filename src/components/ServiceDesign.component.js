import React, {useEffect} from 'react';
import WebmUiUxDesign from './assets/svg_image/Animations/uiuxdesign.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceDesign = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
        <section class="page-banner">
            <div class="container">
                <div class="banner-content text-center">
                    <h2>UI & UX Design</h2>
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

                            <h2>UI & UX Design</h2>
                            <p>UX design is directly related to customer experience,' User experience (UX) refers to the
                                interaction a customer has with a product or service,

                                We are researching user's website experience, talking to people about their products,
                                identifying their needs, and market research.

                                The interaction between the user and the website is presented through UI design, we design
                                your website's interface to be familiar, easy to learn, and simple.

                                We work on the User Interface and User Experience for your website, solve the problems of
                                the customers visiting your website and work on product development with a remarkable
                                strategy.


                            </p>

                            <div class="work-part-content">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="work-left">
                                            <div class="work-webm">
                                                <video playsInline autoPlay muted loop>
                                                    <source src={WebmUiUxDesign} type='video/webm' />
                                                </video>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="work-content">
                                            <h2>Webhubzone UI&UX Design Services</h2>
                                            <p>UI design works closely on all the factors related to the website, The visual
                                                design, and colour scheme, Graphics design, Gesture-based interface,
                                                voice-controlled interface, layout, Typography, Colour projects, Branding,
                                                buttons, Icons, menus, etc. UX Design is all about building on the user
                                                feedback loop established during the previous stages, putting ideas forward
                                                to users, seeking their feedback, and refining them.

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>The Functioning Of User Interface (UI) Design</h2>
                            <p> We are focused on incorporating visual hierarchy into a design for Indian
                                visitors, giving visual cues patterns to users.
                                Considering UX design process and research, Customer analysis & research
                                design,
                                Developing graphics and establishing brands, User storylines & user guides,
                                An
                                interactive and animated experience and Variations of all device screen
                                sizes.
                            </p>
                            <h2> Fundamentals Included In Webhubzone UX Design </h2>
                            <ol>
                                <li> Generating user flows and tasks.</li>
                                <li>Study of user complication.</li>
                                <li>Understanding Indian visitors.</li>
                                <li>User feedback and testing.</li>

                            </ol>
                            <h2>UI and UX Designs Are Needed For Your Website</h2>
                            <p>Every website is successful because of its visitors, A good user experience is very important
                                for a website, Therefore the use of UI and UX design works to optimize the user experience
                                and
                                usability, usefulness, and desirability of the website's interface.</p>
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
                        <a class="accordion-link" href="#question1"> What is the best user interface or user experience
                            design?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Both are very important for your website UX design focus on the Indian customer experience
                                on the website, and UI design makes a beautiful user-friendly interface.
                            </p>

                        </div>
                    </div>
                    <div class="accordion-item" id="question2">
                        <a class="accordion-link" href="#question2">What facilities are provided to the website with the
                            help of UX Designing?

                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p> In UX designing, we create & maintain brand-style customer analysis, content auditing, and
                                mapping.</p>

                        </div>
                    </div>
                    <div class="accordion-item" id="question3">
                        <a class="accordion-link" href="#question3"> Is UI design the same as UX design?

                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p> No, Ux Design works on the customer's website experience and UI design works on the
                                interface of the website's products and services.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item" id="question4">
                        <a class="accordion-link" href="#question4">Why UI and UX designs are needed?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Every website is successful because of its Indian visitors, just as marketing takes care of
                                the customers' needs, so UI and UX designs are used to optimize the user experience and
                                interface of the website. It is extremely important for a website to have a good Indian user
                                experience.
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item" id="question5">
                        <a class="accordion-link" href="#question5"> Why UI is the best?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p><ol>
                                <li>User interface help Indian visitors satisfying and frustration-free</li>
                                <li>User interface should communicate website brand values & build user trust</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default ServiceDesign;