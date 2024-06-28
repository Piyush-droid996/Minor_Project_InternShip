import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';

const AdminLogin = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const URL = "http://localhost:5001/api/login/";

    
    

    const handleAdminLogin =  () => {

        
        
        // alert(JSON.stringify({ userName:username, password:password}));
        
        // let config = {
        //     headers: {
        //         "content-type": "application/json; charset=utf-8",
        //         "accept":"*/*",
        //         "accept-encoding":"gzip, deflate, br",
        //         "connection":"keep-alive",
        //         "host": "localhost:5000"
        //     }
        // }
        
        try{
            var userdata = { "userName":username, "password":password};
            // let result = await fetch(URL, {
            //     method:"GET",
            //     body:JSON.stringify(userdata),
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // });
            axios.post(URL, 
                userdata 
                ).then((result)=>{
                // alert(JSON.stringify(result.data));
                if(result.data.userName){
                    localStorage.setItem("user", JSON.stringify(result.data));
                    navigate('/formdata');
                }
                else{
                    alert(result.data.message);
                }
            }).catch((err)=>{
                alert(err);
            })
        } catch(err){
            alert(err);
        }
        
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <div>
            <div className='login' style={{"margin-top":"20vh"}}>
                <input onChange={(e) => setUsername(e.target.value)} type="text" className="inputBox" placeholder="Enter Username/Email" />
                <input onChange={(e) => setPassword(e.target.value)} id="pass" onKeyDown={(e)=>{if(e.key === 'Enter'){handleAdminLogin();}}} type="password" className="inputBox" placeholder="Enter Password" />
                <button onClick={handleAdminLogin} className='loginButton' type='button'>Login</button>
            </div>
        </div>
    )
}

export default AdminLogin;