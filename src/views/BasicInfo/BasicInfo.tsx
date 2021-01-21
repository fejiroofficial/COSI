import React from "react";
import { connect } from 'react-redux';
import PreviewInfo from '../../components/PreviewInfo';
import InformationForm from '../../components/InformationForm';

type BasicInfoProps = {
  showPreview: boolean
};

const BasicInfo: React.FC<BasicInfoProps> = ({ showPreview }) => {
  let informationDisplay;
  if (showPreview) {
    informationDisplay = <PreviewInfo />
  } else {
    informationDisplay = <InformationForm />
  }
  return (
    <div className='d-flex justify-content-center'>
      {informationDisplay}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  showPreview: state.information.showPreview
})

export default connect(mapStateToProps, null)(BasicInfo);
