import React, {useEffect} from 'react';
import ServiceSidebar from './ServiceSidebar.component';
import SvgPaymentGateway from './assets/svg_image/ServicePaymentGateway.svg';

const ServicePaymentGateway = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
            <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>Payment Gateway</h2>
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

                                <h2>Payment Gateway</h2>
                                <p>An e-commerce service provider provides Webhubzone with a payment gateway to allow merchants
                                    to accept credit cards, UPI payments, and direct payments. Webhubzone offers the most
                                    accessible integration, online onboarding, feature-rich checkout, and best-in-class
                                    performance. We offer a wide range of payment methods across credit cards, debit cards, net
                                    banking, EMI Banking, UPI, and wallets.
                                </p>
                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-image">
                                                    <img  src={SvgPaymentGateway} alt="Work payment" />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>Digital payments can help you do more</h2>

                                                <p>Our payment solutions will help you run your business more efficiently.
                                                <ol>
                                                    <li>Native OTP</li>
                                                    <li>Instant refund</li>
                                                    <li>Recurring payments</li>
                                                </ol>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5>Pay with UPI through WebhubZone</h5>
                                                <p>Here's the fastest, easiest way to accept payments. Wehubzone allows you to
                                                    accept payments via popular UPI apps at checkout. Choose from a number of
                                                    transaction flows to suit your business requirements.</p>
                                <h5>
                                    Simple, transparent pricing
                                </h5>
                                <p>Accept digital payments via 100+ payment methods with the webhubzone payment gateway.
                                    Webhubzone makes it easy to get started!</p>
                                <h5>Payouts from payment gateways are settled more quickly</h5>
                                <p>Even on bank holidays, you can accept payments and get fast settlements.</p>

                                <h5>
                                    Designed for huge scales
                                    </h5>
                                    <p>Our online payment gateway offers reliability and scales with your business. Transact
                                        fast
                                        and smoothly without any downtimes.
                                    </p>
                                    <h5>Payment gateways that accept UPI in India</h5>
                                    <p>With webhubzone Payments, you can provide your customers with the best UPI checkout
                                        experience, with the highest success rate.</p>
                                    <h5>Make sure your UPI payment gateway integration is right
                                        UPI intent flow
                                    </h5>
                                    <p>Allow customers to make payments faster by automatically launching UPI apps on their
                                        mobile
                                        devices. It is recommended for all mobile payments.</p>
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
                            <a class="accordion-link" href="#question1" >What is a Payment Gateway?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>Payment gateways help merchants accept payments by transferring financial information from
                                    their
                                    merchant websites to issuing banks, card associations, and online wallets. Payment gateways
                                    are
                                    used by both online and offline businesses.

                                    E-commerce relies heavily on payment gateways to facilitate the online transaction process,
                                    which is the realization of value.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">What features are provided by Payment Gateway by
                                webhubzone Payments?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> webhubzone Payments offers a wide range of payment gateway features such as instant refunds
                                    including, instant settlements, etc. webhubzone Payments help businesses with domestic
                                    payment
                                    collection.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question3">
                            <a class="accordion-link" href="#question3">What payment modes are supported on webhubzone Payments?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> Webhubzone Payments supports the widest range of payment modes with a single integration. We
                                    support over 100+ payment modes such as Credit and Debit cards (Visa, Mastercard, Rupay),
                                    Net
                                    Banking and Paytm and other wallets, UPI via BHIM UPI, Google Pay, PhonePe, and EMI options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default ServicePaymentGateway;