import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>BE IN TOUCH WITH US</span>
                <div className="mail">
                    <input type="email" placeholder="Enter your email..." />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    )
}

export default Contact