import { connect } from 'react-redux';

import AdminRefuge from 'src/components/Page/AdminRefuge';

import { fetchUser } from 'src/actions/login';


const mapStateToProps = (state) => ({
  user: state.login.user,
  token: state.login.token,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => {
    dispatch(fetchUser());
  },
});

const AdminRefugeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminRefuge);

export default AdminRefugeContainer;
