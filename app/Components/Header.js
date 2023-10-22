"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/disney-plus-logo.png";
import { menu } from "../data";
import HeaderItems from "./HeaderItems";
import { nanoid } from "nanoid";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const { user, logOut, setLogoutButtonClicked } = UserAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await logOut();
      setToggleProfile(false);
      setLogoutButtonClicked(true);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <div className="flex gap-8 md:gap-12 justify-between p-6 bg-[#0F0B14] sm:sticky sm:top-0 sm:z-50">
      <div className="flex flex-col justify-center sm:mx-0">
        <Image
          src={logo}
          width={990}
          height={562}
          alt="logo image"
          className="w-[80px]"
        />
      </div>
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
          src="/spiderman.png"
          width={70}
          height={70}
          alt="profile image"
          className="cursor-pointer"
          onClick={() => setToggleProfile(!toggleProfile)}
        />
        {toggleProfile && user && (
          <div className="absolute z-20 right-0 mt-4 bg-[#0F0B14] border-[0.5px] border-slate-600 rounded-md p-6 flex flex-col gap-6 text-white text-sm">
            <p>Bienvenue, {user.displayName}</p>
            <button
              onClick={handleSignOut}
              className="cursor-pointer bg-[#0072d2] text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-[#0085d2] "
            >
              <FiLogOut />{" "}
              <span className="whitespace-nowrap">Se déconnecter</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
