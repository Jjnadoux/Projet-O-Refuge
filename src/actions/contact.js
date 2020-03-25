export const CHANGE_CONTACT_FIELD = 'CHANGE_CONTACT_FIELD';
export const CONTACT_US = 'CONTACT_US';
export const SAVE_ERROR = 'SAVE_ERROR';
export const CONTACT_OK = 'CONTACT_OK';

export const changeContactField = (name, value) => ({
  type: CHANGE_CONTACT_FIELD,
  value,
  name,
});

export const contactUs = () => ({
  type: CONTACT_US,
});
  
export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});
  
export const contactOk = () => ({
  type: CONTACT_OK,

});
