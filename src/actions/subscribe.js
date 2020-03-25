export const CHANGE_SUBSCRIBE_FIELD = 'CHANGE_SUBSCRIBE_FIELD';
export const SUBSCRIBE_USER = 'SUBSCRIBE_USER';
export const SAVE_ERROR = 'SAVE_ERROR';
export const SUBSCRIBE_OK = 'SUBSCRIBE_OK';

export const changeSubscribeField = (name, value) => ({
  type: CHANGE_SUBSCRIBE_FIELD,
  value,
  name,
});

export const SubscribeUser = () => ({
  type: SUBSCRIBE_USER,
});

export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});

export const subscribeOk = () => ({
  type: SUBSCRIBE_OK,

});
