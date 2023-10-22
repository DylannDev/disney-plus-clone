import React from "react";
import Link from "next/link";

function HeaderItems({ name, Icon }) {
  return (
    <Link
      href="/home"
      className="text-white flex items-center gap-2 cursor-pointer"
    >
      <Icon className="text-xl sm:text-base" />
      <h2 className="hidden md:block text-sm font-semibold tracking-widest hover:underline underline-offset-8">
        {name}
      </h2>
    </Link>
  );
}

export default HeaderItems;
