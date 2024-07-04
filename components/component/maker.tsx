"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Team Lead",
    description:
      "Binod is team Lead",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      <Image
          src="https://static01.nyt.com/images/2019/03/10/style/02momo-1/02momo-1-videoSixteenByNineJumbo1600.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Market",
    description:
      "marketing is in hand of Dolly Chaiwala ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://w7.pngwing.com/pngs/59/826/png-transparent-meme-illustration-rage-comic-internet-troll-internet-meme-cartoon-comics-troll-face-meme-miscellaneous-ink-monochrome-thumbnail.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Resource Provider",
    description:
      "Bidhayak Chachaa",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
         <Image
          src="https://i1.sndcdn.com/artworks-htPrc1EwFiDJ5CG9-Gz7fQg-t500x500.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "devoloper",
    description:
      "ultron",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://static01.nyt.com/images/2019/03/10/style/02momo-1/02momo-1-videoSixteenByNineJumbo1600.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Maker() {
  return (
    <div className="p-10">
      <h1 className=" text-center items-center text-3xl font-heading text-red-700">About US</h1>
      <StickyScroll content={content} />
    </div>
  );
}
