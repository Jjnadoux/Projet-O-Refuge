import { connect } from 'react-redux';

import AdminRefugeOne from 'src/components/Page/AdminRefugeOne';

import { fetchUser } from 'src/actions/login';
import { addShelter, changeAddShelterField } from 'src/actions/shelter';


const mapStateToProps = (state) => ({
  user: state.login.user,
  name: state.addShelter.name,
  firstname: state.addShelter.firstname,
  lastname: state.addShelter.lastname,
  street_number: state.addShelter.street_number,
  street_name: state.addShelter.street_name,
  zipcode: state.addShelter.zipcode,
  city: state.addShelter.city,
  department_id: state.addShelter.department_id,
  phone_number: state.addShelter.phone_number,
  mobile_phone: state.addShelter.mobile_phone,
  email: state.addShelter.email,
  link_website: state.addShelter.link_website,
  siret_number: state.addShelter.siret_number,
  shelterAdded: state.addShelter.shelterAdded,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => {
    dispatch(fetchUser());
  },
  changeAddShelterField: (name, value) => {
    dispatch(changeAddShelterField(value, name));
  },
  handleAddShelter: () => {
    dispatch(addShelter());
  },
});

const AdminRefugeOneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminRefugeOne);

export default AdminRefugeOneContainer;
