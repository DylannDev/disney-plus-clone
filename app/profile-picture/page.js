/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";

function ProfilePicture() {
  const [pictureClicked, setPictureClicked] = useState(false);
  const {
    user,
    setIsRedirected,
    updatePicture,
    setUpdatePicture,
    selectedPicture,
    setSelectedPicture,
  } = UserAuth();

  const router = useRouter();

  const imageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleChangePicture = () => {
    setUpdatePicture(selectedPicture);
    router.push("/home");
  };

  useEffect(() => {
    localStorage.setItem("SELECTED_PICTURE", JSON.stringify(selectedPicture));
  }, [selectedPicture]);

  useEffect(() => {
    if (!user) {
      setIsRedirected(true);
      router.push("/");
    }
  }, [user]);

  return (
    user && (
      <div className="flex flex-col h-full justify-center items-center gap-12 px-6">
        <div>
          <h2 class="text-2xl sm:text-3xl text-white font-medium pb-6 mt-12">
            Modifier la photo de profil
          </h2>
          <h4 class="text-lg sm:text-xl text-slate-300 text-center">
            Sélectionnez un avatar
          </h4>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-10">
          {imageNumber.map((number, index) => (
            <div className="relative" key={nanoid(8)}>
              <Image
                onClick={() => setSelectedPicture(index)}
                src={`/avatar-${number}.png`}
                width={300}
                height={300}
                alt="profile image"
                className={`w-[120px] hover:scale-110 hover:border-[2px] transition-all duration-200 rounded-full cursor-pointer ${
                  selectedPicture === index && `scale-110 border-[2px]`
                }`}
              />
              <span
                className={`absolute bottom-0 right-0 p-2 rounded-full bg-white ${
                  selectedPicture === index ? `opacity-100` : `opacity-0`
                }`}
              >
                <FaCheck className="text-[#0072d2] text-xs" />
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={handleChangePicture}
          className="bg-[#0072d2] hover:bg-[#0085d2] text-white py-3 px-6 rounded-md text-[15px] font-medium tracking-widest"
        >
          SELECTIONNER
        </button>
      </div>
    )
  );
}

export default ProfilePicture;
