import { connect } from 'react-redux';

import LesAnimaux from 'src/components/Page/LesAnimaux';


const mapStateToProps = (state) => ({
  animals: state.animals.animals,
});

const mapDispatchToProps = () => {};

const LesAnimauxContainer = connect(
  mapStateToProps,
  null,
)(LesAnimaux);

export default LesAnimauxContainer;
