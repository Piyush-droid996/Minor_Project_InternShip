import React, {useEffect,useState} from 'react';
import axios from 'axios';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import "./assets/style/contact.css";
import WebmContactus from './assets/svg_image/Animations/contactus.webm';

const Contact = () => {

    const [contactForm, setContactForm] = useState({ "Name":'', "Number":'', "Email":"", "Company":'', "Services":"", "Requirement":"", "Other":""});
    const [services, setServices] = useState([]);
    // const [contactPost, setContactPost] = useState({});
    const URL = "http://localhost:5001/api/contactforms/";
    // var contactfields = { Name:'', Number:'', Email:"", Company:'', Services:"", Requirement:"", Other:""};
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
      }, []);

    useEffect(() =>{
        setContactForm({...contactForm, "Services":services.join(", ")});
    },[services,contactForm]);



    const onFormSubmit = ()=>{

        // alert(contactForm.join("\n"));
        axios.post(URL, {...contactForm}
        ).then(response => {
            alert(response.data.message);
        });
    }

    const onCheckedServices= event=>{
        if(event.target.checked){
            setServices([...services, event.target.value]);
        }
        else{
            setServices(services.filter((value)=> value !== event.target.value));
        }
        
        
    }

    // var checkList = document.getElementById('list1');
    // checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
    //     if (checkList.classList.contains('visible'))
    //         checkList.classList.remove('visible');
    //     else
    //         checkList.classList.add('visible');
    // }

    return (
        <>
            <section class="vector-banner">
        <div class="contact-container">
            <div class="contact-webm">
                <video playsInline autoPlay muted loop>
                    <source src={WebmContactus} type='video/webm' />
                </video>
            </div>
            <div class="contact-address-box">

                <h3>Contact Us</h3>
                <div class="address-contactus">
                    <span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i
                            class="fa fa-envelope-o fa-stack-1x fa-inverse"></i></span>
                    <div class="address-contents"><a href="mailto:contact@webhubzone.in">info@webhubzone.in</a>
                    </div>
                </div>
                <div class="address-contactus">
                    <span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i
                            class="fa fa-phone fa-stack-1x fa-inverse"></i></span>
                    <div class="address-contents">9929921411, 7300003687</div>
                </div>
                <div class="address-contactus">
                    <span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i
                            class="fa fa-map-marker fa-stack-1x fa-inverse"></i></span>

                    <div class="address-contents">2nd Floor, C 9/9, Chitrakoot Marg, Sector 9, Vaishali Nagar,
                        Jaipur, Rajasthan 302021</div>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- contactform strt --> */}
    <section id="contact-section">
        <div class="contact-container">
            <div class="formGroup ">
                <form class="SubformGroup " onSubmit={onFormSubmit.bind(this)}>
                    <div class="row mb-3 ">
                        <div class="col-sm-11 col-lg-11 margin_1_em ">
                            <input type="YourName " placeholder="Your Name " class="form-control gray_bg "
                                id="inputEmail3 " onChange={(e)=>{setContactForm({...contactForm, "Name":e.target.value}); }} required />
                        </div>
                        <div class="col-sm-11 col-lg-11 margin_1_em ">
                            <input type="Contact_Number " placeholder="Contact Number "
                                class="form-control gray_bg " id="inputEmail3 " onChange={(e)=>{setContactForm({...contactForm, "Number":e.target.value}); }} required />
                        </div>
                        <div class="col-sm-11 col-lg-11 margin_1_em ">
                            <input type="email " placeholder="Your Email " class="form-control gray_bg "
                                id="inputEmail3 " onChange={(e)=>{setContactForm({...contactForm, "Email":e.target.value}); }} required />
                        </div>
                        <div class="col-sm-11 col-lg-11 margin_1_em ">
                            <input type="Company_Name " placeholder="Company Name " class="form-control gray_bg "
                                id="inputEmail3 " onChange={(e)=>{setContactForm({...contactForm, "Company":e.target.value}); }} required />
                        </div>
                        <div class="choose-services" >
                            <h6>Choose What You Want :
                            </h6>
                            <div class="answer-form">
                                <ul class="items width48">
                                    <li class=" gray_bg"><input type="checkbox" onChange={onCheckedServices.bind(this)} value="Product Listing" /> Product
                                        Listing
                                    </li>
                                    <li class="gray_bg"><input type="checkbox" onChange={onCheckedServices.bind(this)} value="E-Commerce Accout Management" /> E-Commerce Account Management</li>
                                    <li class=" gray_bg"><input type="checkbox" onChange={onCheckedServices.bind(this)} value="Digital Marketing" /> Digital
                                        Marketing</li>
                                    <li class=" gray_bg"><input type="checkbox" onChange={onCheckedServices.bind(this)} value="Web-Development" /> Web-Development
                                    </li>
                                    <li class=" gray_bg"><input type="checkbox" onChange={onCheckedServices.bind(this)} value="App-Development" /> App-Development
                                    </li>
                                    <li class="gray_bg"><input type="checkbox" onChange={onCheckedServices.bind(this)} value="Payment-Gateway" /> Payment-Gateway
                                    </li>
                                    
                                </ul>
        
                            </div>
                        </div>
                        <div class="col-sm-11 col-lg-11 margin_1_em ">
                            <textarea placeholder="Requirement " class="form-control gray_bg "
                                id="exampleFormControlTextarea1 " onChange={(e)=>{setContactForm({...contactForm, "Requirement":e.target.value}); }} rows="3 "></textarea>
                        </div>

                        <div class="col-sm-11 col-lg-11 margin_1_em d-grid gap-2 ">
                            <button type="submit" class="contact-button">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
            <div class="col-sm-6 container5 ">
                <iframe class="shadow width48 geomap" title='geolocation'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.5222886659355!2d75.73828702918425!3d26.900665494932845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a8c8b1c057%3A0x54955fe14afcc19d!2sWebhub%20zone%20Network%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1668062780872!5m2!1sen!2sin"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
        </>


    )
}

export default Contact;