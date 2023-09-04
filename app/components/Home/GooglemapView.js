import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const GooglemapView = () => {
  const ContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinates = { lat: 22.484619, lng: 88.357903 };
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={ContainerStyle} center={coordinates} zoom={13}></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GooglemapView;
