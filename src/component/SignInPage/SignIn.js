import './SignIn.css'
import React from 'react'
import GroupImage from '../../image/HarborReadsLogo.png'

function SignIn() {
  return (
    <div className='container1'>
        
        <div className='container2'>
        <h1 className='Hello'>Hello!</h1>
        <h1 className='SignIntoAccount'>Sign into your account!</h1>
        <h1 className='ForgetPassword'>Forgot Password ?</h1>
        <div className='Inputs'>
            <div className='input'>
                <input type='email' placeholder='Email'/> 
            </div>

            <div className='input'>
                <input type='password' placeholder='Password'/> 
            </div>

            <div className='SignButton'>
                <div className='subbmit'>Sign in</div>
            </div>

        </div>
        </div>

        <div className='SignupLogo'>
        <img src={GroupImage} alt='App Logo' className='Logo' />
        <h1 className='welcome'>Welcome!</h1>
        </div>  
    </div>
  )
}

export default SignIn