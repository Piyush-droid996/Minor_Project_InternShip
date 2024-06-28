import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/pricing_table.css';

const PricingContent = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <section>
        <div class="container-fluid">
            <div class="container">
                <div class="container-heading">
                    <h1>Content Writing Packages</h1>
                    <p>Webhubzone provide best of the content writing services in india. The
                        advantage of keyword specific web contents is that they drive home best of the SEO results and
                        makes your site visible in the SERP india. In order for the contents to flow, there is a
                        prescribed strategy and movement. Content writers with our agency have the skills and experience
                        to make sure every website gets the right balance in terms of its content flow.</p>
                </div>
                <div class="pricing-area ">
                    <div class="row">
                        {/* <!----------1st package start-------------> */}
                        <div class="col-sm-6">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Plan-I - Web Content Writing</h4>
                                </div>
                                <div class="price-content">
                                    <table >
                                        <tr>
                                            <td>100-200 words</td>
                                            <td>200 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>200-300 words</td>
                                            <td>300 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>300-500 words</td>
                                            <td>500 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>750-1000 words</td>
                                            <td>800 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!-------------2nd package start----------------> */}
                        <div class="col-sm-6">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Plan-II - Article Writing</h4>
                                </div>
                                <div class="price-content">
                                    <table >
                                        <tr>
                                            <td>100-200 words</td>
                                            <td>200 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>200-300 words</td>
                                            <td>300 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>300-500 words</td>
                                            <td>500 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>750-1000 words</td>
                                            <td>800 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!---------------3rd package start----------------> */}
                        <div class="col-sm-6">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Plan-III - Press Release Writing</h4>
                                </div>
                                <div class="price-content">
                                    <table >
                                        <tr>
                                            <td>100-200 words</td>
                                            <td>350 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>200-300 words</td>
                                            <td>450 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>300-500 words</td>
                                            <td>650 INR</td>
                                            <td>1 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>750-1000 words</td>
                                            <td>800 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!------------4th package Start-----------------> */}
                        <div class="col-sm-6">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Plan-IV - Business Writing</h4>
                                </div>
                                <div class="price-content">
                                    <table >
                                        <tr>
                                            <td>100-200 words</td>
                                            <td>200 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>200-300 words</td>
                                            <td>300 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>300-500 words</td>
                                            <td>500 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                        <tr>
                                            <td>750-1000 words</td>
                                            <td>800 INR</td>
                                            <td>2 day</td>
                                            <Link to="/contact"><td class="price-button"> <a href="/contact">Proceed Now</a></td></Link>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default PricingContent;