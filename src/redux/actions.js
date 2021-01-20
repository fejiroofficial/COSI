const ADD_FORM_DATA = 'ADD_FORM_DATA';
const TOGGLE_PREVIEW = 'TOGGLE_PREVIEW';

export const addFormData = dataInformation => ({
  type: ADD_FORM_DATA,
  dataInformation,

})

export const showPreview = bool => ({
  type: TOGGLE_PREVIEW,
  previewToogle: bool,
})
