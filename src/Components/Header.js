import React from 'react'
import titleimg from '../media/title.png'

const handleLoginClick = () =>{
    console.log('click')
}
function Header() {
    return (
            <div className="header-box">
            <header>
                <h1 className='h1-title'>Diablo II Armory</h1>
                <div onClick={handleLoginClick}className="login-box">
                    <h5 className="login">Login</h5>
                </div>
                {/* <div className='title-image-box'>
                    <img className='title-image' src={titleimg} alt='title'></img>
                </div> */}
            </header>
            </div>
    )
}

export default Header
