import React from "react";
import HeaderItems from "./HeaderItems";
import { menu } from "../data";
import { nanoid } from "nanoid";
import Image from "next/image";

function NavBarPhone() {
  return (
    <div className="fixed z-40 bottom-4 left-[50%] translate-x-[-50%] flex justify-around bg-[#0072d2] py-6 px-8 rounded-xl sm:hidden gap-10 shadow-xl shadow-slate-950">
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
    </div>
  );
}

export default NavBarPhone;
