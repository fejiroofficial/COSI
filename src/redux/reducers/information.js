const ADD_FORM_DATA = 'ADD_FORM_DATA';
const TOGGLE_PREVIEW = 'TOGGLE_PREVIEW';

const initialState = {
  formData: {},
  showPreview: false
};

export default function information(state = initialState, action) {
  switch(action.type) {
    case ADD_FORM_DATA:
      return {
        formData: action.dataInformation,
        showPreview: true
      }
    case TOGGLE_PREVIEW:
      return {
        showPreview: action.previewToogle,
      }
    default:
      return state
  }
};
