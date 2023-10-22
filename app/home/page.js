"use client";
import React from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMovieList from "../Components/GenreMovieList";
import NavBarPhone from "../Components/NavBarPhone";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

function Home() {
  const { user, setIsRedirected } = UserAuth();
  const router = useRouter();

  if (!user) {
    setIsRedirected(true);
    router.push("/");
    return null;
  }

  return (
    <>
      <Header />
      <NavBarPhone />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default Home;
