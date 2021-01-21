import React from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PreviewInfo.css';
import { showPreview } from '../../redux/actions';

type PreviewInfoProps = {
  showPreview: Function,
  formData: object
};

const PreviewInfo: React.FC<PreviewInfoProps> = ({ formData, showPreview }) => {
  const history = useHistory();
  const submitForm = async () => {
    try {
      const { status } = await axios.post('https://app.fakejson.com/q', {
        token: "ELOeXImnDCgAec0Bx3GUqw",
        data: { ...formData }
      })
      if (status === 200) {
        showPreview(false)
        history.push('/confirmation')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const userData = Object.entries(formData).map(([key,value]) => (
    <div className="InfoItem" key={key}>
      <Row>
        <Col>{key}</Col>
        <Col>{value}</Col>
      </Row>
    </div>
  ))

  return (
    <div className="Preview">
      <br /><br />
      <div className="PreviewHeader">Please review your information</div>
      <Card className='PreviewCard'>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="CardHeader">Information</div>
          <Button onClick={() => showPreview(false)} className='CustomButtonOutline' variant='outline-primary'>Change</Button>
        </Card.Header>
        <Card.Body>
          {userData}
        </Card.Body>
        <Card.Footer onClick={submitForm} className="CardFooterHold d-flex justify-content-center align-items-center">Continue</Card.Footer>
      </Card>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    formData: state.information.formData
  }
}

export default connect(mapStateToProps, { showPreview })(PreviewInfo);
