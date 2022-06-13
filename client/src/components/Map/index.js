import React from "react";
import { ReactBingmaps } from "react-bingmaps-plus";

function Map(props) {
  let locations = props.locations.map((location) => {
    return { location: location, option: { color: "red" } };
  });

  //alert("process.env.REACT_APP_BING_MAPS_API_KEY is: " + process.env.REACT_APP_BING_MAPS_API_KEY);
  //alert("process.env.BING_MAPS_API_KEY is: " + process.env.BING_MAPS_API_KEY);
  const apiKey = process.env.REACT_APP_BING_MAPS_API_KEY || process.env.BING_MAPS_API_KEY;
  //alert("apiKey is: " + apiKey);

    return (
      <div style={{ height: props.height, width: props.width }}>
        {/* <ReactBingmaps
          id = "two" 
          className = "customClass"
          bingmapKey = {"AuobAMXGIQwgjimas4B-M6-ohLbmLaLNDIUojn2nI-VCDEh1VxaL__j48GUmEu-C"}
          center = {center}
          mapTypeId = {"aerial"}
          pushPins = {props.locations}
          getLocation = {{ addHandler: "click", callback:props.onClick }}
        /> */}
        <ReactBingmaps
          bingmapKey = {apiKey}
          center = {props.center}
          mapTypeId = {"aerial"}
          pushPins = {locations}
          getLocation = {{ addHandler: "click", callback:props.onClick }}
        />
      </div>
    );
  }
//}, "addHandler": {"type" : "click", callback: this.callBackMethod }

export default Map;
