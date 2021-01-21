import React from "react";
import Card from 'react-bootstrap/Card';
import './Confirmation.css';
import happyBunch from '../../assets/images/happyBunch.svg';

type ConfirmationProps = {};

const Confirmation:React.FC<ConfirmationProps> = () => {
  return (
    <div className='CardHolder d-flex justify-content-center align-items-center'>
      <Card className='ConfirmationCard'>
        <Card.Body className='ConfirmationCardBody'>
          <div className="ConfirmationHeader">Your check-in is confirmed</div>
          <img src={happyBunch} alt="check confirmed" />
        </Card.Body>
      </Card>
    </div>
  )
}
export default Confirmation;
