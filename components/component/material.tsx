"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function Esource() {
  return (
    <div className="max-w-8xl  mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Notes",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Organizer",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Ebooks",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Premium Lecture",
    description:
      " Get exclusive lecture with our best teacher.",
    link: "https://meta.com",
  },

  
];
