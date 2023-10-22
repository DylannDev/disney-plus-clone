"use client";
import { useEffect } from "react";
import { UserAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function App() {
  const { user } = UserAuth();
  const router = useRouter();

  return <>{user ? router.push("/home") : router.push("/login")}</>;
}
