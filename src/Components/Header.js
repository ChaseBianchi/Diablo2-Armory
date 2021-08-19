import React from 'react'
import titleimg from '../media/title.png'

function Header() {
    return (
        <div>
            <header>
                <div className='title-image-box'>
                    <img className='title-image' src={titleimg} alt='title'></img>
                </div>
            </header>
        </div>
    )
}

export default Header
