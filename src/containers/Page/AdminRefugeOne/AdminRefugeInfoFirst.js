import { connect } from 'react-redux';

import AdminRefugeInfoFirst from 'src/components/Page/AdminRefugeOne';

import { addShelter, changeAddShelterField } from 'src/actions/shelter';


const mapStateToProps = (state) => ({
  user: state.login.user,
  name: state.shelter.name,
  firstname: state.shelter.firstname,
  lastname: state.shelter.lastname,
  street_number: state.shelter.street_number,
  street_name: state.shelter.street_name,
  zipcode: state.shelter.zipcode,
  city: state.shelter.city,
  department_id: state.shelter.department_id,
  phone_number: state.shelter.phone_number,
  mobile_phone: state.shelter.mobile_phone,
  email: state.shelter.email,
  link_website: state.shelter.link_website,
  siret_number: state.shelter.siret_number,
  shelterAdded: state.shelter.shelterAdded,
});

const mapDispatchToProps = (dispatch) => ({

  changeAddShelterField: (name, value) => {
    dispatch(changeAddShelterField(value, name));
  },
  handleAddShelter: () => {
    dispatch(addShelter());
  },
});

const AdminRefugeInfoFirstContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminRefugeInfoFirst);

export default AdminRefugeInfoFirstContainer;
