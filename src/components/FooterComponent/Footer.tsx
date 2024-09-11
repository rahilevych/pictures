import React from 'react';
import './Footers.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__social'>
        <div className='footer__icon'>
          <i className='ph ph-instagram-logo'></i>
        </div>
        <div className='footer__icon'>
          <i className='ph ph-facebook-logo'></i>
        </div>
        <div className='footer__icon'>
          <i className='ph ph-pinterest-logo'></i>
        </div>
        <div className='footer__icon'>
          <i className='ph ph-twitter-logo'></i>
        </div>
      </div>
      {/* <a href='https://www.vecteezy.com/free-png/404'>404 PNGs by Vecteezy</a> */}
    </div>
  );
};

export default Footer;
