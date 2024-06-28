import React, {useEffect} from 'react';
import WebmEmailMark from './assets/svg_image/Animations/emailmarketing.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceEmailMark = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
           <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>E-mail Marketing</h2>
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

                                <h2>E-mail Marketing</h2>
                                <p>Email marketing is a direct marketing channel that allows businesses to share new products,
                                    sales and updates with customers on their contact lists. Its high ROI makes it critical to
                                    most businesses' overall inbound strategy.
                                    We use email marketing to grow your brand and sell products to Indian customers.
                                    This automation effort will promote your company and services by driving traffic to your
                                    website and keeping Indian customers up to date on the latest deals and products.
                                </p>

                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-webm">
                                                    <video playsInline autoPlay muted loop>
                                                        <source src={WebmEmailMark} type='video/webm' />
                                                    </video>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>Webhubzone E-Mail Marketing Lead Magnet Strategy </h2>
                                                <p>Lead magnets are commonly used when sending email messages, discount coupons,
                                                    checklists, reports, audio files, e-books, video training files,
                                                    communication templates, software trials, free webinars, newsletters, blog
                                                    subscriptions and so on.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    Benefits Of E-Mail Marketing</h2>
                                <ol>
                                    <h5>
                                        <li> Price-effective </li>
                                    </h5>
                                    <p>E-Mail marketing can be much lower than many other forms of marketing. There are no
                                        advertising fees, media space costs, or printing costs.</p>
                                    <h5>
                                        <li>The permission-based </li>
                                    </h5>
                                    <p>The Indian customer’s list will consist of people who have rapidly chosen to receive your
                                        emails. Indian Customers who are genuinely interested in your products and services will
                                        be more likely to engage with your business.
                                    </p>
                                    <h5>
                                        <li>Personalization and Segmentation</li>
                                    </h5>
                                    <p>E-mail marketing lets you personalise messages. You can also segment your marketing list
                                        so that your customers receive messages from you that they are interested in the product
                                        or the service which will encourage their engagement with your website.
                                    </p>
                                    <h5>
                                        <li> Conversions and increasing sales </li>
                                    </h5>
                                    <p>Webhubzone promotions allow people to share a link to your website and immediately follow
                                        up with customers' call-to-action.
                                    </p>
                                    <h5>
                                        <li>Measurable & Time-saving </li>
                                    </h5>
                                    <p>Through automated E-mail marketing, you can send emails to customers based on their
                                        actions on your website.
                                    </p>

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
                            <a class="accordion-link" href="#question1"> What techniques does webhub use for E-mail marketing?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                    Newsletters, Announcements, Invitations to an event, Marketing offers, welcome emails, free
                                    webinars, or just shipping a newsletter, etc. These are the techniques that Webhubzone uses
                                    for your website through E-mail marketing.
                                </p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">What are the primary principles of E-mail marketing?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>E-mail marketing is the process of targeting your audience and Indian Customers by email. It
                                    helps to increase conversions and revenue by providing valuable information to customers to
                                    help them achieve their goals. This is the primary principle of email marketing to satisfy
                                    your Indian customers.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question3">
                            <a class="accordion-link" href="#question3"> What is the most important thing to keep in mind while
                                doing E-mail marketing?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> You should never over-promote your website through email campaigns, because if you keep on
                                    E-Mailing the Indian customers or subscribers on a daily basis, then it may cause problems
                                    for them, and they may not like to revisit your website.
                                </p>
                            </div>
                        </div>              
                    </div>
                </div>
            </section>
       </>
    )
}

export default ServiceEmailMark;