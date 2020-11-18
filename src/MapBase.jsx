import { Fragment, memo } from "react";
import ReactMapboxGl, { Layer, Source } from "react-mapbox-gl";
import LayerSourcesContainer from "./LayerSources/LayerSourcesContainer";
import _ from "lodash";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoiam9ubnlmaXR6Z2liIiwiYSI6ImNraG5rZGRpZDAxY2syeG1qcXd3NXI4d2gifQ.MWVuHNvtHJFjBy9iOw-BNA"
});

const MapBase = () => {
  return (
    <Fragment>
      <Map
        style={"mapbox://styles/mapbox/streets-v8"}
        center={[-115.60638002547114, 32.673646537283027]}
        zoom={[13]}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
        <LayerSourcesContainer />
      </Map>
    </Fragment>
  );
};

export default memo(MapBase);
