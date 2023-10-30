/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

function Login() {
  const [subscribe, setSubscribe] = useState(true);

  const {
    user,
    isRedirected,
    logoutButtonClicked,
    googleSignIn,
    logOut,
    setLoading,
    handleLogin,
    handleCreateUser,
    setEmail,
    setPassword,
  } = UserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    router.push("/home");
    return null;
  }

  return (
    <>
      <div className="grid place-content-center h-[calc(100vh-93px)]">
        <div className="flex flex-col gap-4 p-10 max-w-[24rem]">
          <form
            onSubmit={subscribe ? handleCreateUser : handleLogin}
            className="flex flex-col gap-4"
          >
            <h3 className="text-white text-2xl font-semibold">
              {subscribe ? "Inscrivez-vous" : "Identifiez-vous"}
            </h3>
            <p className="text-xs text-white font-light pb-2">
              Cette adresse e-mail et ce mot de passe vous permettront de vous
              identifier sur votre compte Disney+ pour profiter de vos séries et
              films préférés.
            </p>

            <input
              type="email"
              placeholder="Adresse email"
              className="text-white bg-[#31333E] focus:border-[1px] focus:border-gray-700 p-4 outline-none rounded-md text-sm font-light placeholder:text-sm placeholder:font-light"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Mot de passe"
              className="text-white bg-[#31333E] focus:border-[1px] focus:border-gray-700 p-4 outline-none rounded-md text-sm font-light placeholder:text-sm placeholder:font-light"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="mt-2">
              {logoutButtonClicked
                ? null
                : isRedirected && (
                    <p className="text-red-400 text-xs font-light mb-1">
                      Connectez-vous pour accéder à cette page
                    </p>
                  )}
              {subscribe ? (
                <button
                  type="submit"
                  className="uppercase text-sm tracking-wider p-4 bg-[#0072d2] text-white rounded-md cursor-pointer w-full"
                >
                  s'inscrire
                </button>
              ) : (
                <button
                  type="submit"
                  className="uppercase text-sm tracking-wider p-4 bg-[#0072d2] text-white rounded-md cursor-pointer w-full"
                >
                  connexion
                </button>
              )}
            </span>
          </form>

          <span className="tracking-widest text-xs font-light text-center text-white ">
            -OU-
          </span>
          <button
            onClick={handleSignIn}
            className="bg-[#0072d2] text-white p-4 rounded-md"
          >
            Se connecter avec Google
          </button>
          <p
            className="text-sm text-white underline underline-offset-8 text-center cursor-pointer"
            onClick={() => setSubscribe(!subscribe)}
          >
            {subscribe
              ? "Vous avez déjà un compte?"
              : "Vous n'êtes pas encore inscrit?"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
