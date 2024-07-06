"use client"
import Link from "next/link"
import { motion } from "framer-motion";
import Image from "next/image"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import testimonials from "../ui/testimonial"
import { Heading1, MenuIcon, XIcon } from "lucide-react"
import { Maker } from "./maker"
import { Esource } from "./material"
import { useState } from "react";
import { AuroraBackground } from "../ui/aurora-background";
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white px-4 lg:px-6 h-14 flex items-center shadow-md opacity-95 font-bold text-2xl fixed top-0 w-full z-10">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 mr-2" />
          <span>Academy</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Courses
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Instructors
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </header>
      {isMenuOpen && (
        <nav className="bg-black relative backdrop-blur-md text-white fixed top-14 left-0 w-full flex flex-col items-center md:hidden">
          <Link href="#" className="py-2 text-sm font-medium hover:underline" prefetch={false}>
            Courses
          </Link>
          <Link href="#" className="py-2 text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="py-2 text-sm font-medium hover:underline" prefetch={false}>
            Instructors
          </Link>
          <Link href="#" className="py-2 text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      )}


      <main className=" bg-gradient-to-r from-sky-500 to-indigo-500  flex-1 mt-14">
       
      <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <section className="w-full  py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl text-red-600 font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Unlock Your Potential with Our Academy
              </h1>
              <p className="max-w-lg text-white md:text-xl lg:text-base xl:text-xl">
                Discover a world of knowledge and skills at our academy. Enroll in our top-rated courses and embark on a transformative learning journey.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
            <Image
              src="https://educationnorthwest.org/sites/default/files/graphics/lesson-study-resources.png"
              width={800}
              height={500}
              alt="Hero"
              className="mx-auto rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </section>
        
        </motion.div>
        </AuroraBackground>
        <section className="py-12">
          <h1 className="text-white font-heading text-4xl text-center mb-8">Study Resources</h1>
          <Esource />
        </section>
        
        <section className="h-[30rem] flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-black rounded-md antialiased">
          <h1 className="text-white font-heading text-4xl mb-8">Testimonials</h1>
          <InfiniteMovingCards items={testimonials} direction="right" speed="normal" pauseOnHover={false} />
        </section>
        
        <Maker />
      </main>

      <footer className="bg-muted p-6 md:py-12 w-full items-center  bg-slate-800 text-stone-50  " >
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Academy</h3>
            <Link href="#" prefetch={false}>
              Courses
            </Link>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Instructors
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" prefetch={false}>
              Policies
            </Link>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Email
            </Link>
            <Link href="#" prefetch={false}>
              Phone
            </Link>
            <Link href="#" prefetch={false}>
              Address
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2024 Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
