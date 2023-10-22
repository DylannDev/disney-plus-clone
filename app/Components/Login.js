"use client";
import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

function Login() {
  const { user, isRedirected, logoutButtonClicked, googleSignIn, logOut } =
    UserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // if (user) {
  //   router.push("/home");
  //   return null;
  // }

  console.log(user);
  return (
    <div>
      {logoutButtonClicked
        ? null
        : isRedirected && (
            <p className="text-red-400 text-sm ">
              Vous devez vous connecter pour accéder à cette page
            </p>
          )}
      <button
        onClick={handleSignIn}
        className="bg-[#0072d2] text-white py-3 px-6 rounded-md"
      >
        Se connecter avec Google
      </button>
      <button
        onClick={handleSignOut}
        className="bg-red-400 text-white py-3 px-6 rounded-md"
      >
        Se deconnecter
      </button>
    </div>
  );
}

export default Login;
