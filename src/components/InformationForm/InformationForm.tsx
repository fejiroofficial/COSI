import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import './InformationForm.css';
import { addFormData, showPreview } from '../../redux/actions';

type InformationFormProps = {
  addFormData: Function,
  showPreview: Function,
  formData: object
};

const InformationForm: React.FC<InformationFormProps> = ({ addFormData, showPreview, formData }) => {
  const [currentUser, setCurrentUser] = useState('');
  const [userData, setUserData]: any = useState({
    firstname: '',
    lastname: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    passportNumber: '',
    country: '',
    city: '',
    address: '',
    birthDate: '',
    birthPlace: '',
    passportIssueDate: '',
    passportIssueLocation: '',
    passportExpiry: '',
  })
  const [termsCondition, setTermsCondition] = useState(false);
  const [requiredFields, setRequiredFields]: any = useState([]);

  const getDataFromCache = () => {
    const cachedData = localStorage.getItem("userData") || '';
    const currentUser = localStorage.getItem('currentUser') || '';
    setCurrentUser(currentUser)
    if (cachedData) {
      setUserData(JSON.parse(cachedData))
    }
  }

  const setDataToCache = () => {
    // cache form data using local storage
    localStorage.setItem("userData", JSON.stringify(userData))
  }
  useEffect(() => {
    getDataFromCache()
  }, [])

  const updateInput = (event: any) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const specificRequirements: any = {
    Austria: ['country', 'city', 'passportExpiry'],
    Belgium: ['country', 'city', 'address', 'birthDate'],
    France: ['country', 'city', 'birthDate', 'birthPlace'],
    Greece: ['passportIssueDate', 'passportIssueLocation', 'passportExpiry'],
    Spain: ['address'],
  }

  const validateFields = () => {
    // validation goes here
    let compulsoryFields;
    const { nationality } = userData;
    if (Object.keys(specificRequirements).includes(userData.nationality)) {
      const requirements: any = specificRequirements[nationality];
      compulsoryFields = requirements.filter((requirement: any) => {
        let compulsory;
        if (!userData[requirement]) {
          compulsory = requirement
        }
        return compulsory
      })
    }
    return compulsoryFields;
  }

  const preview = async () => {
    setDataToCache()

    // reset compulsory fields
    setRequiredFields([])

    const compulsoryFields = validateFields()
    if (compulsoryFields && compulsoryFields.length) {
      setRequiredFields(compulsoryFields)
    } else {
      addFormData(userData)
    }

  }

  return (
    <div className="InformationForm">
      <br /><br />
      <div className="InfoHeader">Hi, {currentUser}!</div>
      <br />
      <div className="form">
        <label>Basic</label>
        <>
          <div className='InformationFullName'>
            <FormControl
              className='CustomFormControlSec'
              name='firstname'
              value={userData.firstname}
              placeholder='First name'
              onChange={(event) => updateInput(event)}
            />
            <br />
            <br />
            <FormControl
              className='CustomFormControlSec'
              name='lastname'
              value={userData.lastname}
              placeholder="Last name"
              onChange={(event) => updateInput(event)}
            />
          </div>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            as="select"
            name='nationality'
            value={userData.nationality}
            onChange={(event) => updateInput(event)}
          >
            <option value="" hidden>Nationality</option>
            <option>Germany</option>
            <option>France</option>
            <option>Spain</option>
            <option>Austria</option>
            <option>Greece</option>
            <option>Ireland</option>
            <option>Belgium</option>
          </FormControl>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='email'
            value={userData.email}
            placeholder="Email"
            onChange={(event) => updateInput(event)}
          />
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            type='tel'
            name='phoneNumber'
            value={userData.phoneNumber}
            placeholder="Phone number"
            onChange={(event) => updateInput(event)}
          />
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='passportNumber'
            value={userData.passportNumber}
            placeholder="Passport number"
            onChange={(event) => updateInput(event)} />
          <br />
          <br />
          <label>Others</label>
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='country'
            value={userData.country}
            placeholder="Country"
            onChange={(event) => updateInput(event)} />
          <span className={requiredFields.includes('country') ? 'Error' : ''}>*Compulsory field for Austria, Belguim, France</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='city'
            value={userData.city}
            placeholder="City"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('city') ? 'Error' : ''}>*Compulsory field for Austria, Belguim, France</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='address'
            value={userData.address}
            placeholder="Address"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('address') ? 'Error' : ''}>*Compulsory field for Belguim, Spain</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            type='date'
            name='birthDate'
            value={userData.birthDate}
            placeholder="Birth date"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('birthDate') ? 'Error' : ''}>*Birth date (Compulsory field for Belguim, France)</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='birthPlace'
            value={userData.birthPlace}
            placeholder="Birth place"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('birthPlace') ? 'Error' : ''}>*Compulsory field for France</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='passportIssueDate'
            value={userData.passportIssueDate}
            type='date'
            placeholder="Passport date of issue"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('passPortIssueDate') ? 'Error' : ''}>*Passport date of issue (Compulsory field for Greece)</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            name='passportIssueLocation'
            value={userData.passportIssueLocation}
            placeholder="Passport location of issue"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('passportIssueLocation') ? 'Error' : ''}>*Compulsory field for Greece</span>
          <br />
          <br />
          <FormControl
            className='CustomFormControlSec CustomFormControlLong'
            type='date'
            name='passportExpiry'
            value={userData.passportExpiry}
            placeholder="Passport expiry date"
            onChange={(event) => updateInput(event)}
          />
          <span className={requiredFields.includes('passportExpiry') ? 'Error' : ''}>*Passport expiry date (Compulsory field for Greece, Austria)</span>
          <br />
          <br />
          <FormGroup id="formGridCheckbox">
            <FormCheck onChange={({ target: { checked } }) => setTermsCondition(checked)} type="checkbox" label="Accepts T&C" />
          </FormGroup>
          <span className={requiredFields.length ? 'Error' : 'ErrorNote'}>*Some required fields are missing</span>
          <br />
          <Button
            disabled={
              !termsCondition ||
              !userData.firstname ||
              !userData.lastname ||
              !userData.nationality ||
              !userData.email ||
              !userData.phoneNumber ||
              !userData.passportNumber}
            onClick={preview} variant="primary" className='CustomButton'>Continue</Button></>
        <br /><br /><br />
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  formData: state.information.formData
})


export default connect(mapStateToProps, { addFormData, showPreview })(InformationForm);
