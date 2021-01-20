import React from 'react';
import WelcomeForm from '../../components/WelcomeForm';
import './Welcome.css';
import illustration from '../../assets/images/gaussianBlur.svg';

type WelcomeProps = {

};

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className='WelcomeWrapper'>
      <div className='WelcomeForm'>
        <WelcomeForm />
      </div>
      <div className='Illustration'>
        <img src={illustration} alt="" />
      </div>
    </div>
  )
}

export default Welcome;
