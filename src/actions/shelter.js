export const FETCH_SHELTER = 'FETCH_SHELTER';
export const SAVE_SHELTER = 'SAVE_SHELTER';
export const SAVE_ERROR = 'SAVE_ERROR';
export const CHANGE_ADDSHELTER_FIELD = 'CHANGE_ADDSHELTER_FIELD';
export const ADD_SHELTER = 'ADD_SHELTER';
export const ADDSHELTER_OK = 'ADDSHELTER_OK';

export const fetchShelter = (id) => ({
  type: FETCH_SHELTER,
  id: id,
});

export const saveShelter = (shelter) => ({
  type: SAVE_SHELTER,
  newShelter: shelter,
});

export const changeAddShelterField = (name, value) => ({
  type: CHANGE_ADDSHELTER_FIELD,
  value,
  name,
});

export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});

export const addShelter = () => ({
  type: ADD_SHELTER,

});

export const addShelterOk = () => ({
  type: ADDSHELTER_OK,
});
