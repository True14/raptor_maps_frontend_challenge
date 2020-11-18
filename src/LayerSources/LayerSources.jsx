import { Fragment, useEffect } from "react";
import { Layer, Source } from "react-mapbox-gl";

const LayerSources = ({ data, getData }) => {
  useEffect(() => {
    getData();
    const timerId = setInterval(() => getData(), 1000);
    return () => clearInterval(timerId);
  }, [getData]);
  const testSource = {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: data
    }
  };

  return (
    <Fragment>
      <Source id="test-source" geoJsonSource={testSource} />
      <Layer
        type="symbol"
        id="marker"
        sourceId="test-source"
        layout={{
          "icon-image": "marker-15",
          "icon-padding": 0,
          "icon-allow-overlap": true,
          "icon-rotate": ["get", "bearing"],
          "text-field": ["get", "name"],
          "text-allow-overlap": true,
          "text-anchor": "top",
          "text-offset": [0, 1]
        }}
      />
    </Fragment>
  );
};

export default LayerSources;
