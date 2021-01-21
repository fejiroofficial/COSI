import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './WelcomeForm.css';
import { checkin } from '../../api';

type WelcomeFormProps = {};

const WelcomeForm: React.FC<WelcomeFormProps> = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();
  const checkFlightRecordHandler = async () => {
    const payload = {
      flightNumber,
      lastName,
    }
    try {
      const data = await checkin(payload)
      if (data && Object.keys(data).length) {
        localStorage.setItem('currentUser', data.lastName)
        history.push('/basic-form')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='WelcomeHeader'>Welcome to your web check-in</div>
      <br />
      <div>
        <FormControl
          type='number'
          className='CustomFormControl'
          placeholder="Flight number"
          onChange={({ target: { value } }) => setFlightNumber(value)}
        />
        <span>*Must be four digits long e.g 7878</span>
        <br /><br />
        <FormControl
          className='CustomFormControl'
          placeholder="Last name"
          onChange={({ target: { value } }) => setLastName(value)}
        />
        <br /><br />
        <Button
          disabled={!flightNumber || !lastName || flightNumber.length !== 4}
          onClick={checkFlightRecordHandler}
          variant="primary"
          className='CustomButton'>Search Flight</Button>
      </div>
    </div>
  )
}
export default WelcomeForm;
