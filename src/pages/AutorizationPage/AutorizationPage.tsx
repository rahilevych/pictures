import React from 'react';
import './AutorizationPage.scss';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent';
import LogInComponent from '../../components/LogInComponent/LogInComponent';

const AutorizationPage = () => {
  return (
    <div className='wrapper'>
      <div className='autorization'>
        <div className='container autorization__container'>
          <div className='autorization__window'>
            <div className='autorization__buttons'>
              <button className=' autorization__btn autorization__signup-btn '>
                Sign up
              </button>
              <button className='autorization__btn autorization__login-btn'>
                Log in
              </button>
            </div>
            <div className='autorization__form-block'>
              <SignUpComponent />
              <LogInComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutorizationPage;
