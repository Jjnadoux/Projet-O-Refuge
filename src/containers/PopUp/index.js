import { connect } from 'react-redux';

import { changeContactField, contactUs } from 'src/actions/contact';

import PopUp from 'src/components/PopUp';

const mapStateToProps = (state) => ({

  firstname: state.contact.firstname,
  lastname: state.contact.lastname,
  email: state.contact.email,
  profile: state.contact.profile,
  message: state.contact.message,
  contactOk: state.contact.contactOk,

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  changeContactField: (name, value) => {
    dispatch(changeContactField(value, name));
  },
  handleContact: () => {
    dispatch(contactUs());
  },

});

const PopUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopUp);
export default PopUpContainer;
