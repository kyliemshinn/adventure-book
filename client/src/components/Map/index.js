import React from "react";
import { ReactBingmaps } from "react-bingmaps-plus";

function Map(props) {
  let locations = props.locations.map((location) => {
    return { location: location, option: { color: "red" } };
  });

  return (
    <div style={{ height: props.height, width: props.width }}>
      <ReactBingmaps
        bingmapKey={
          "AuobAMXGIQwgjimas4B-M6-ohLbmLaLNDIUojn2nI-VCDEh1VxaL__j48GUmEu-C"
        }
        center={props.center}
        mapTypeId={"aerial"}
        pushPins={locations}
        getLocation={{ addHandler: "click", callback: props.onClick }}
      />
    </div>
  );
}

export default Map;
