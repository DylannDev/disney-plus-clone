"use client";
import React, { useEffect } from "react";
import { UserAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import Login from "./Components/Login";

export default function App() {
  const { user } = UserAuth();
  const router = useRouter();

  return <>{user ? router.push("/home") : <Login />}</>;
}
