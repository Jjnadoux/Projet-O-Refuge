import { connect } from 'react-redux';

import LesRefuges from 'src/components/Page/LesRefuges';


const mapStateToProps = (state) => ({
  shelters: state.shelters.shelters,
});

const mapDispatchToProps = () => {};

const LesRefugesContainer = connect(
  mapStateToProps,
  null,
)(LesRefuges);

export default LesRefugesContainer;
