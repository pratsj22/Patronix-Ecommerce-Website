import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Mixers</span>
          <span>Toasters</span>
          <span>Heaters</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro reprehenderit dolor nostrum, maiores perferendis, </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam porro reprehenderit dolor nostrum, maiores perferendis,</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Patronix</span>
          <span className="copyright">
            ©️ Copyright 2024. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer