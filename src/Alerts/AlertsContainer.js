import Alerts from "./Alerts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.features
  };
};
const AlertsContainer = connect(mapStateToProps)(Alerts);

export default AlertsContainer;
