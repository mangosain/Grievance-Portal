"use client";

import { FaArrowRight } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";
import ModalTest from "../modalTest/page";

import aboutImage from "@/public/assets/about-us.svg";
import faqImage from "@/public/assets/q-and-a-about-loan.svg";
import trackImage from "@/public/assets/girl-work-on-laptop (1).png";

const Hero = () => {
  return (
    <div className="lg:h-full w-full lg:flex lg:flex-col">
      <UpperHero />
      <ModalTest />
      <LowerHero />
    </div>
  );
};

export default Hero;

const UpperHero = () => {
  return (
    <div className="mt-14 h-3/5 p-3 text-info lg:flex">
      <div className="h-full lg:w-3/5 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold">
          Welcome to C-DAC Noida
          <br />
          <span className="text-6xl font-bold">Grievance Redressal Portal</span>
        </h1>
        <p className="lg:w-2/3 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          voluptas nulla consectetur deleniti magni dolor facilis tempora
          dolorem nemo et.
        </p>
        <Link
          className="mt-10 bg-info rounded-lg md:w-2/5 text-left p-2 text-white font-bold flex items-center justify-between group"
          href="./grievanceForm"
        >
          Register a Concern
          <FaArrowRight className="group-hover:-rotate-45 ease-in-out duration-200" />
        </Link>
      </div>
      <div className="h-full lg:w-2/5 lg:flex py-6 overflow-hidden">
        <Carousel />
      </div>
    </div>
  );
};

const LowerHero = () => {
  return (
    <div className="h-2/5 px-3 md:flex gap-4 text-white">
      <HeroTile
        HeroTileChildren={{
          title: "Track Status",
          description: "Track your application status",
          delay: 0,
          image: {
            src: trackImage.src,
          },
          to: "/status",
        }}
      />
      <HeroTile
        HeroTileChildren={{
          title: "FAQs",
          description: "Frequently Asked Questions",
          delay: 0.1,
          image: {
            src: faqImage.src,
          },
          to: "/faq",
        }}
      />
      <HeroTile
        HeroTileChildren={{
          title: "About Us",
          description: "Know more about CDAC",
          delay: 0.2,
          image: {
            src: aboutImage.src,
          },
          to: "/about",
        }}
      />
    </div>
  );
};

const Carousel = () => {
  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.25, delay: 0.1 }}
      className="carousel carousel-center rounded-box max-w-full space-x-4 p-4"
    >
      <div className="carousel-item w-4/5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41WHTo98befFlH1NmP5GLNgZYmyvfiieJ_g&s"
          className="rounded-box w-full shadow-lg"
        />
      </div>
      <div className="carousel-item w-4/5">
        <img
          src="https://pbs.twimg.com/profile_images/1149269634077491201/mPioNs03_400x400.jpg"
          className="rounded-box w-full shadow-lg"
        />
      </div>
      <div className="carousel-item w-4/5">
        <img
          src="https://i0.wp.com/www.admissionmba.in/wp-content/uploads/2019/10/CDAC-Noida-Campus.jpg?ssl=1"
          className="rounded-box w-full shadow-lg"
        />
      </div>
      <div className="carousel-item w-4/5">
        <img
          src="https://i.ytimg.com/vi/9WUu1uOLCGU/sddefault.jpg"
          className="rounded-box w-full shadow-lg"
        />
      </div>
    </motion.div>
  );
};

interface HeroTileProps {
  title: string;
  description: string;
  delay: number;
  to: string;
  image: {
    src: string;
  };
}

const HeroTile = ({
  HeroTileChildren,
}: {
  HeroTileChildren: HeroTileProps;
}) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: HeroTileChildren.delay }}
      className="h-full flex-1 p-4 rounded-xl shadow-lg relative mt-2 lg:mt-0 content-center group"
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('" +
          HeroTileChildren.image.src +
          "')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">
        {HeroTileChildren.title}
      </h1>
      <p className="text-md md:text-lg font-semibold mb-10 md:m-0">
        {HeroTileChildren.description}
      </p>
      <Link
        href={HeroTileChildren.to}
        className="h-20 w-20 md:h-24 md:w-24 bg-success-content absolute right-0 bottom-0 rounded-tl-xl rounded-br-xl text-5xl md:text-6xl flex justify-center items-center"
      >
        <BsArrowRight className="group-hover:-rotate-45 ease-in-out duration-200" />
      </Link>
    </motion.div>
  );
};
