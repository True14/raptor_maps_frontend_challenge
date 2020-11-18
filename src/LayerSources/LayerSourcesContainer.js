import LayerSources from "./LayerSources";
import { connect } from "react-redux";
import getData from "../actions";

const mapStateToProps = (state) => {
  return {
    data: state.features
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData())
});

const LayerSourcesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerSources);

export default LayerSourcesContainer;
