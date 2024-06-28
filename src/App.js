import './App.css';

// MODULES
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Nav from './components/Nav.component';
import Home from './components/Home.component';
import About from './components/aboutus.component';
import Service from './components/service.component';
import Blog from './components/blog.component';
import Contact from './components/contactus.component';
import Footer from './components/Footer.component';
import Login from './components/login.component';
import Logout from './components/logout.component';

// Service Components
import ServiceAppDev from './components/ServiceAppDev.component';
import ServiceCRO from './components/ServiceCRO.component';
import ServiceContentMark from './components/ServiceContentMark.component';
import ServiceDesign from './components/ServiceDesign.component';
import ServiceEmailMark from './components/ServiceEmailMark.component';
import ServicePPC from './components/ServicePPC.component';
import ServicePaymentGateway from './components/ServicePaymentGateway.component';
import ServiceProductListing from './components/ServiceProductListing.component';
import ServiceSEO from './components/ServiceSEO.component';
import ServiceSMO from './components/ServiceSMO.component';
import ServiceSocialMedia from './components/ServiceSocialMedia.component';
import ServiceWebDev from './components/ServiceWebDev.component';

// Pricing Components
import PricingDigitalMarketing from './components/PricingDigitalMarketing.component.js';
import PricingContent from './components/PricingContent.component.js';
import PricingPpc from './components/PricingPpc.component.js';
import PricingSeo from './components/PricingSeo.component.js';
import PricingSmm from './components/PricingSmm.component.js';
import PricingSmo from './components/PricingSmo.component.js';
import PricingWebsite from './components/PricingWebsite.component.js';
import Packages from './components/Packages.component';
import Form from './components/form.component';
import AdminLogin from './components/AdminLogin.component';


function App() {
  // var isAdmin=false;
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
      </head>

      <BrowserRouter>
      <Nav/>
      <Routes>
       
        <Route path="/formdata" element={<Form/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/pricing" element={<Packages/>}/>
        <Route path="/pricing/ContentWriting" element={<PricingContent/>} />
        <Route path="/pricing/WebPackages" element={<PricingWebsite/>} />
        <Route path="/pricing/DigitalMarketing" element={<PricingDigitalMarketing/>} />
        <Route path="/pricing/DigitalMarketing/PPC" element={<PricingPpc/>} />
        <Route path="/pricing/DigitalMarketing/SMO" element={<PricingSmo/>} />
        <Route path="/pricing/DigitalMarketing/SEO" element={<PricingSeo/>} />
        <Route path="/pricing/DigitalMarketing/SMM" element={<PricingSmm/>} />
 

        

        <Route path="/services/AppDevelopement" element={<ServiceAppDev/>} />
        <Route path="/services/ContentMarketing" element={<ServiceContentMark/>} />
        <Route path="/services/CRO" element={<ServiceCRO/>} />
        <Route path="/services/UiUx-Design" element={<ServiceDesign/>} />
        <Route path="/services/EmailMarketing" element={<ServiceEmailMark/>} />
        <Route path="/services/PaymentGateway" element={<ServicePaymentGateway/>} />
        <Route path="/services/ProductListing" element={<ServiceProductListing/>} />
        <Route path="/services/DigitalMarketing/PPC" element={<ServicePPC/>} />
        <Route path="/services/DigitalMarketing/SMO" element={<ServiceSMO/>} />
        <Route path="/services/DigitalMarketing/SEO" element={<ServiceSEO/>} />
        <Route path="/services/DigitalMarketing/SMM" element={<ServiceSocialMedia/>} />
        <Route path="/services/WebDevelopement" element={<ServiceWebDev/>} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
