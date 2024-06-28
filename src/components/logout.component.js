import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const localUser = localStorage.getItem('user');
    const navigate = useNavigate();
    React.useEffect(() => {
        if (localUser){
            localStorage.removeItem('user');
            navigate('/');
            alert("Logout Successfully!")
        }
        else{
            
            navigate('/');
            alert("please login first");
        }
    })
}

export default Logout;