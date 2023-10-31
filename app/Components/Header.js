"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/disney-plus-logo.png";
import { BsArrowLeft } from "react-icons/bs";
import { menu } from "../data";
import HeaderItems from "./HeaderItems";
import { nanoid } from "nanoid";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { UserAuth } from "../context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const {
    user,
    logOut,
    setLoading,
    updatePicture,
    setIsRedirected,
    setUpdatePicture,
    selectedPicture,
    setLogoutButtonClicked,
  } = UserAuth();

  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await setTimeout(() => {
        logOut();
        router.push("/");
      }, 1000);
      setLogoutButtonClicked(true);
      setToggleProfile(false);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex gap-8 md:gap-12 justify-between p-6 sm:sticky sm:top-0 sm:z-50 ${
        pathname === "/home"
          ? "bg-[#0F0B14]"
          : "border-b-[1px] border-slate-700"
      }`}
    >
      <div className="flex flex-col justify-center sm:mx-0">
        <Image
          src={logo}
          width={990}
          height={562}
          alt="logo disney plus"
          className="w-[80px]"
        />
      </div>
      {pathname === "/home" && user && (
        <>
          <div className="hidden min-[1100px]:flex gap-8">
            {menu.map((menuItem) => (
              <HeaderItems
                key={nanoid(8)}
                name={menuItem.name}
                Icon={menuItem.icon}
              />
            ))}
          </div>
          <div className="hidden sm:flex sm:items-center min-[1100px]:hidden gap-8 md:gap-8">
            {menu.map(
              (menuItem, index) =>
                index < 3 && (
                  <HeaderItems
                    key={nanoid(8)}
                    name={menuItem.name}
                    Icon={menuItem.icon}
                  />
                )
            )}
            <div
              className="relative min-[1100px]:hidden"
              onClick={() => setToggle(!toggle)}
            >
              <HeaderItems Icon={PiDotsThreeOutlineVerticalFill} />
              {toggle && (
                <div className="absolute z-20 left-0 mt-4 bg-[#0F0B14] border-[0.5px] border-slate-600 rounded-md p-6 flex flex-col gap-6">
                  {menu.map(
                    (menuItem, index) =>
                      index > 2 && (
                        <HeaderItems
                          key={nanoid(8)}
                          name={menuItem.name}
                          Icon={menuItem.icon}
                        />
                      )
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <Image
              src={`/avatar-${updatePicture + 1}.png`}
              width={70}
              height={70}
              alt="profile image"
              className="cursor-pointer"
              onClick={() => setToggleProfile(!toggleProfile)}
            />
            {toggleProfile && user && (
              <ProfileMenu
                user={user}
                handleSignOut={handleSignOut}
                setToggleProfile={setToggleProfile}
              />
            )}
          </div>
        </>
      )}
      {pathname === "/profile-picture" && user && (
        <button
          className="flex items-center gap-2 text-white text-sm cursor-pointer underline underline-offset-8 "
          onClick={router.back}
        >
          <BsArrowLeft />
          <span>RETOUR</span>
        </button>
      )}
    </div>
  );
}

export default Header;
