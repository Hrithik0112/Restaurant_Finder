import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext } from "react";
import Markers from "./Markers";

const GooglemapView = ({ businessList }) => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const ContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  const coordinates = { lat: 22.484619, lng: 88.357903 };
  //   console.log(userLocation);
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={ContainerStyle} center={userLocation} zoom={13}>
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map((item, index) => index <= 7 && <Markers business={item} key={index} />)}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GooglemapView;
