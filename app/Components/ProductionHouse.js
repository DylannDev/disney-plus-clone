"use client";
import React, { useState } from "react";
import { productionHouseList } from "../data";
import { nanoid } from "nanoid";
import Image from "next/image";

function ProductionHouse() {
  const [hover, setHover] = useState(false);

  return (
    <div className="md:flex grid grid-cols-3 gap-4 md:gap-6 py-8 px-6 md:px-16">
      {productionHouseList.map((item, index) => (
        <div
          key={nanoid(8)}
          className="relative hover:border-2 hover:border-slate-100 rounded-xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl bg-gradient-to-b from-[#30323E] to-[#1E1F2A] "
        >
          <Image
            src={item.img}
            width={500}
            height={300}
            onMouseOver={() => setHover(index)}
            onMouseOut={() => setHover(false)}
            alt="Production House Image"
            className="z-10 opacity-100"
          />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className={`absolute top-0 -z-[1] w-full h-full rounded-xl ${
              hover === index ? `opacity-100` : `opacity-0`
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
