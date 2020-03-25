import { connect } from 'react-redux';

import PageAnimal from 'src/components/Page/PageAnimal';

import { fetchAnimal } from 'src/actions/animal';


const mapStateToProps = (state) => ({
  animal: state.animal,
  tags: state.animal.animal.tags,
  shelterPage: state.animal.animal.shelter,
  id: state.id,
});

const mapDispatchToProps = (dispatch) => ({
  loadAnimal: (id) => {
    dispatch(fetchAnimal(id));
  },
});

const PageAnimalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageAnimal);

export default PageAnimalContainer;
