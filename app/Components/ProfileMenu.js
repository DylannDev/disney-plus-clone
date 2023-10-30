import React from "react";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

function ProfileMenu({ user, handleSignOut, setToggleProfile }) {
  return (
    <div className="absolute z-20 right-0 mt-4 bg-[#0F0B14] border-[0.5px] border-slate-600 rounded-md p-6 flex flex-col gap-6 text-white text-sm">
      <p className="font-extralight  border-b-[1px] pb-6 border-white text-lg whitespace-nowrap">
        Bienvenue, {user.displayName}
      </p>
      <Link
        href="/profile-picture"
        className="hover:underline underline-offset-8 whitespace-nowrap"
        onClick={() => setToggleProfile(false)}
      >
        Changer la photo de profil
      </Link>
      <button
        onClick={handleSignOut}
        className="cursor-pointer bg-[#0072d2] text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-[#0085d2]"
      >
        <FiLogOut /> <span className="whitespace-nowrap">Se déconnecter</span>
      </button>
    </div>
  );
}

export default ProfileMenu;
