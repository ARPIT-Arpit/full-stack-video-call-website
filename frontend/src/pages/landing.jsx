import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import "../App.css"

export default function LandingPage() {


    const router = useNavigate();

    const generateRandomPath = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleJoinAsGuest = () => {
        const randomPath = generateRandomPath(10); 
        router(`/${randomPath}`); 
    };


  return (
    <div className='landingPageContainer'>
        
        <nav>

            <div className='navHeader'>
                <h2>Connect Cast</h2>
            </div>
            <div className='navlist'>
                <p onClick={handleJoinAsGuest}  

                style={{ 
                    cursor: 'pointer', 
                    color: 'white', 
                    transition: 'color 0.3s', 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.color = '#ccc'} 
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >Join as Guest</p>
                <div role='button'>
                <Link to={"/auth"} className='navlink'>Register</Link>
                </div>
                <div role='button'>
                <Link to={"/auth"} className='navlink'>Login</Link>
                </div>
            </div>

        </nav>


        <div className="landingMainContainer">

            <div>

                <h1><span style={{color: "#FF9839"}}>Connect</span> with your loved Ones</h1>
            
                <p>Cover a distance by Connect Cast</p>
                <div role='button'>
                    <Link to={"/auth"}>Get Started</Link>
                </div>

            </div>

            <div>

                <img src="/mobile.png" alt="" />

            </div>

        </div>

    </div>
  )
}
