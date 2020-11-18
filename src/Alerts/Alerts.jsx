import { useState, useEffect } from "react";
import distance from "@turf/distance";
import moment from "moment";

const alertStyle = {
  position: "absolute",
  backgroundColor: "grey",
  color: "white",
  zIndex: 900,
  top: 20,
  right: 15,
  padding: 10,
  borderRadius: 5
};

const checkNotifications = (data, updateAlertsPresent) => {
  const alerts = [];
  data.forEach((tech, index) => {
    for (let i = index + 1; i < data.length; i++) {
      if (tech.properties.tsecs === data[i].properties.tsecs) {
        const techDistance = distance(tech, data[i]) * 1000;
        if (techDistance < 304.8) {
          alerts.push(
            <div key={index}>
              <p>
                {tech.properties.name} & {data[index + 1].properties.name} are
                within 1000 feet of each other at{" "}
                {moment(tech.properties.tsecs).format("h:mm:ss a")}.
              </p>
            </div>
          );
        }
      }
    }
  });

  updateAlertsPresent(alerts);
};

const Alerts = ({ data }) => {
  const [alertsPresent, updateAlertsPresent] = useState([]);
  useEffect(() => {
    if (data.length) {
      checkNotifications(data, updateAlertsPresent);
    }
  }, [data]);

  return alertsPresent.length ? (
    <div style={alertStyle}>{alertsPresent}</div>
  ) : null;
};

export default Alerts;
