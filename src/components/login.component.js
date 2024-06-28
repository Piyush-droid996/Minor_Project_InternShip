import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
// import AuthHeader from '../services/auth-header';

const Login = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method:"post",
            body:JSON.stringify({username,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if(result?.email){
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/',{ isAdmin: result.isAdmin});
        }
        else{
            alert("Please Enter Correct Details !");
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        // if(AuthHeader()['x-access-token'])
      }, []);

    return(
        <div>
            <div className='login'>
                <input onChange={(e) => setUsername(e.target.value)} type="text" className="inputBox" placeholder="Enter Username" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="inputBox" placeholder="Enter Password" />
                <button onClick={handleLogin} className='loginButton' type='button'>Login</button>
            </div>
        </div>
    )
}

export default Login;