import { MarkerF, OverlayView } from "@react-google-maps/api";
import React from "react";
import BusinessItem from "./BusinessItem";

const Markers = ({ business }) => {
  return (
    <div>
      <MarkerF
        position={business.geometry.location}
        icon={{
          url: "/buss-location.png",
          scaledSize: {
            width: 35,
            height: 35,
          },
        }}
      >
        <OverlayView
          position={business.geometry.location}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="ml-[-90px] mt-[-200px]">
            <BusinessItem business={business} />
          </div>
        </OverlayView>
      </MarkerF>
    </div>
  );
};

export default Markers;
