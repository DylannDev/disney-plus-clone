/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMovieList from "../Components/GenreMovieList";
import NavBarPhone from "../Components/NavBarPhone";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

function Home() {
  const { user, loading, setIsRedirected, setLoading } = UserAuth();
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!user) {
    setIsRedirected(true);
    router.push("/");
    return null;
  }

  return (
    <>
      {loading ? (
        <div className="grid place-content-center h-[calc(100vh-118px)]">
          <Image
            src="/loader.gif"
            width={500}
            height={500}
            alt="logo loader"
            className="w-[40px]"
          />
        </div>
      ) : (
        <>
          <Slider />
          <ProductionHouse />
          <GenreMovieList />
        </>
      )}
    </>
  );
}

export default Home;
