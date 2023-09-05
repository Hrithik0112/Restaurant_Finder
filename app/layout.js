"use client";
import { useEffect, useState } from "react";
import Provider from "./Provider";
import HeaderNavbar from "./components/HeaderNavbar";
import "./globals.css";
import { Dosis } from "next/font/google";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SelctedBusinessContext } from "@/context/SelectedBusinessContext";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant-Finder",
  description: "Help People to find Restaurants nearby",
};

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Provider>
          <SelctedBusinessContext.Provider value={{ selectedBusiness, setSelectedBusiness }}>
            <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
              <HeaderNavbar />
              {children}
            </UserLocationContext.Provider>
          </SelctedBusinessContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
