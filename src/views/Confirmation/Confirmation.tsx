import * as React from "react";
import Card from 'react-bootstrap/Card';
import './Confirmation.css';
import happyBunch from '../../assets/images/happyBunch.svg';

export interface Props {
  children?: React.ReactNode
}

export interface State {
}

export default class Confirmation extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className='CardHolder d-flex justify-content-center align-items-center'>
        <Card className='ConfirmationCard'>
          <Card.Body className='ConfirmationCardBody'>
            <div className="ConfirmationHeader">Your check-in is confirmed</div>
            <img src={happyBunch} alt="" />
          </Card.Body>
        </Card>
      </div>
    )
  }
}
