import { connect } from 'react-redux';

import PageRefuge from 'src/components/Page/PageRefuge';

import { fetchShelter } from 'src/actions/shelter';


const mapStateToProps = (state) => ({
  shelter: state.shelter,
  id: state.id,
});

const mapDispatchToProps = (dispatch) => ({
  loadShelter: (id) => {
    dispatch(fetchShelter(id));
  },
});

const PageRefugeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageRefuge);

export default PageRefugeContainer;
