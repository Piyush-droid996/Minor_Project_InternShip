import React, {useEffect} from 'react';
import WebmPPC from './assets/svg_image/Animations/ppc.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServicePPC = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
            <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>Pay Per Click(PPC)</h2>
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

                                <h2>Pay-per-click</h2>
                                <p>Pay-per-click online campaigns have a standard advertising model, which helps drive traffic
                                    to your website through advertising, which is preferable because it pays for advertiser's
                                    publications. It is Internet marketing, which involves paying advertisers a fee for clicking
                                    on the ads.
                                    We provide instant visitor traffic & better results, flexible budget advertising, real-time
                                    tracking ability, increased Indian local visibility and an honest marketing strategy.
                                </p>

                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-webm">
                                                    <video playsInline autoPlay muted loop>
                                                        <source src={WebmPPC} type='video/webm' />
                                                    </video>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>Pay Per Click Services We Are Provide</h2>
                                                <ol>
                                                    <li> Keyword Research</li>
                                                    <li>Account setup & Advertisement creation</li>
                                                    <li>Landing page development</li>
                                                    <li>Tracking installation & testing </li>
                                                    <li>Campaign assessment & launch</li>
                                                    <li> Customer Analysis/feedback </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Advantages of Webhub Pay Per Click Services In India
                                </h2>
                                <ol>
                                    <li><b>Value-Efficient</b> - Because you only pay when the user reaches your website, it's
                                        an
                                        excellent value for money. Your payment can be as large or as small as you want.</li>
                                    <br/>
                                    <li><b>Target</b>- Indian Audience can be chosen based on location, language, and device
                                    </li><br/>
                                    <li><b>Quantitative</b>- Can be used to measure the effectiveness and carefulness of a PPC
                                        campaign, you can determine how much return on investment you can make in the future
                                    </li><br/>
                                    <li><b>Customization</b>- You can use minor adjustments to your website to improve the
                                        campaign best. </li><br/>
                                    <li><b>Groundwork resources</b>- Webhubzone has a number of online courses and training
                                        materials
                                        to help you develop your website skills.</li><br/>
                                    <li><b>Faster</b>-You can see your PPC effect immediately with organic search engine
                                        Optimization. It can also optimise possibilities for Indian customers.
                                    </li><br/>

                                </ol>
                                <h2>Benefits of Pay Per Click Service</h2>
                                <ol>
                                    <li> Rapid traffic & better result </li>
                                    <li>Advertisement creation </li>
                                    <li>Flexible Cost-effective advertising</li>
                                    <li>Higher conversions and increased sales revenue </li>
                                    <li>Increase local visibility</li>

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
                            <a class="accordion-link" href="#question1">What is the purpose of PPC (Pay per Click)?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                    Pay per click online advertising format allows the market to pay for its advertisements by
                                    clicking different social media sites.
                                </p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">What is Webhubzone PPC (pay-per-click) advertising?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>We provide tracking opportunities for your website. PPC is one of the best options for great
                                    financial return, and it also helps to advertise on various social media sites like
                                    Instagram, Facebook, Twitter, YouTube, Pinterest, LinkedIn, etc.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question3">
                            <a class="accordion-link" href="#question3"> How to develop an effective PPC campaign strategy?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>By Defined website goals, Ads, Words, Indian audience, targeting, leading page optimization
                                    analysis and giving feedback to clients.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item" id="question4">
                            <a class="accordion-link" href="#question4">What are the Challenges in PPC (Pay-Per-Click)
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                <ol>
                                    <li> Increased advertising spam</li>
                                    <li> Customer Trusting issues</li>
                                    <li>Low expert knowledge</li>                        
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

export default ServicePPC;