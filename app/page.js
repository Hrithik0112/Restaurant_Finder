"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryList from "./components/Home/CategoryList";
import AreaRange from "./components/Home/AreaRange";
import RatingSelect from "./components/Home/RatingSelect";
import GooglemapView from "./components/Home/GooglemapView";
import GlobalApi from "@/utils/GlobalApi";
import { UserLocationContext } from "@/context/UserLocationContext";
import BusinessList from "./components/Home/BusinessList";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(null);
  const [businessList, setBusinessList] = useState([]);
  const router = useRouter();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    GlobalApi.getGooglePlace(category, radius, userLocation.lat, userLocation.lng).then((resp) => {
      console.log(resp.data.product.results);
      setBusinessList(resp.data.product.results);
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      {/* <h1>Lets begin the Project.</h1>
      <button onClick={() => signOut()}>Sign Out</button> */}
      <div className="first p-3">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <AreaRange onRadiusChange={(value) => setRadius(value)} />
        <RatingSelect />
      </div>
      <div className="second col-span-3">
        <GooglemapView />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3"
        >
          <BusinessList businessList={businessList} />
        </div>
      </div>
    </div>
  );
}
