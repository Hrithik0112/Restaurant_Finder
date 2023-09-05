import { MarkerF, OverlayView } from "@react-google-maps/api";
import React, { useContext } from "react";
import BusinessItem from "./BusinessItem";
import { SelctedBusinessContext } from "@/context/SelectedBusinessContext";

const Markers = ({ business }) => {
  const { selectedBusiness, setSelectedBusiness } = useContext(SelctedBusinessContext);
  return (
    <div>
      <MarkerF
        position={business.geometry.location}
        onClick={() => setSelectedBusiness(business)}
        icon={{
          url: "/buss-location.png",
          scaledSize: {
            width: 35,
            height: 35,
          },
        }}
      >
        {selectedBusiness.reference == business.reference ? (
          <OverlayView
            position={business.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="ml-[-90px] mt-[-200px]">
              <BusinessItem business={business} />
            </div>
          </OverlayView>
        ) : null}
      </MarkerF>
    </div>
  );
};

export default Markers;
