import "./App.css";
import MapBase from "./MapBase";
import AlertsContainer from "./Alerts/AlertsContainer";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <AlertsContainer />
      <MapBase />
    </div>
  );
}

export default App;
