"use client";
import { useEffect, useState, React } from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMovieList from "../Components/GenreMovieList";
import NavBarPhone from "../Components/NavBarPhone";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Login from "../Components/Login";

function Home() {
  const { user, isRedirected, setIsRedirected } = UserAuth();
  const router = useRouter();

  if (!user) {
    // user is signed out or still being checked.
    // don't render anything
    setIsRedirected(true);
    router.push("/");
    return null;
  }

  return (
    <div>
      <Header />
      <NavBarPhone />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default Home;
