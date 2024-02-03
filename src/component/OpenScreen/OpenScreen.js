import React from 'react'
import './OpenScreen.css'
import GroupImage from '../../image/HarborReadsLogo.png'

function OpenScreen() {
  return (
    
    <div className='OpenScreen'>
        <img src={GroupImage} alt='App Logo' className='OpenScreenLogo' />

        <h1 className='Discover'>Discover books</h1>

        <h1 className='Discover2'> you'll love!</h1>

        <div className='SignButtonOpenScreen'>
                <div className='subbmitOpenScreen'>Sign in</div>
        </div>

        <h1 className='NewToHarborReads'>New to HarborReads</h1>

        <h1 className='signupOpenScreen'>Sign Up</h1>

    </div>
  )
}

export default OpenScreen
