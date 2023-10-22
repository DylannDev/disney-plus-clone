"use client";

import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import GenreMovieList from "../Components/GenreMovieList";
import NavBarPhone from "../Components/NavBarPhone";
import { useRouter } from "next/navigation";

function Home() {
  const { user, setIsRedirected } = UserAuth();
  const router = useRouter();

  if (!user) {
    setIsRedirected(true);
    router.push("/login");
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
