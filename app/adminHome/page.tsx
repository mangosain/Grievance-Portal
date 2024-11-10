"use client";

import adminImg from "@/public/assets/receptionist-working-on-her-desk-with-laptop.svg";
import ticketImg from "@/public/assets/lottery-winners.svg";
import doneImg from "@/public/assets/business-task-list.svg";
import pendingImg from "@/public/assets/pending-image.svg";
import faqImg from "@/public/assets/q-and-a-about-loan.svg";
import aboutImg from "@/public/assets/about-us.svg";

import Link from "next/link";
import { motion } from "framer-motion";

const AdminHome = () => {
  return (
    <div className="py-20 px-2 md:py-20 md:px-20 min-h-scree w-full">
      <h1 className="text-5xl font-bold mb-10">Welcome _Admin_Name_!</h1>
      <section className="h-full w-full">
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          <AdminHomeCard
            adminCardProps={{
              title: "Admins",
              count: "1",
              img: adminImg.src,
              delay: 0,
            }}
          />
          <AdminHomeCard
            adminCardProps={{
              title: "Tickets",
              count: "3",
              img: ticketImg.src,
              delay: 0.1,
            }}
          />
          <AdminHomeCard
            adminCardProps={{
              title: "Resolved",
              count: "1",
              img: doneImg.src,
              delay: 0.2,
            }}
          />
          <AdminHomeCard
            adminCardProps={{
              title: "Pending",
              count: "2",
              img: pendingImg.src,
              delay: 0.3,
            }}
          />
          <AdminHomeCard
            adminCardProps={{
              title: "F.A.Qs",
              count: "4",
              img: faqImg.src,
              delay: 0.4,
            }}
          />
          <AdminHomeCard
            adminCardProps={{
              title: "About Section",
              count: "",
              img: aboutImg.src,
              delay: 0.5,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default AdminHome;

interface AdminHomeCardProps {
  title: string;
  count: string;
  img: string;
  delay: number;
}

const AdminHomeCard = ({
  adminCardProps,
}: {
  adminCardProps: AdminHomeCardProps;
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1.2,
          type: "spring",
          stiffness: 50,
          delay: adminCardProps.delay,
        },
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
    >
      <Link
        href="#"
        className="card bg-base-300 shadow-md flex flex-col items-center justify-center text-center p-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(" +
            adminCardProps.img +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="card-title font-semibold text-6xl drop-shadow-xl">
          {adminCardProps.title}
        </h2>
        <p className="text-6xl drop-shadow-xl">{adminCardProps.count}</p>
      </Link>
    </motion.div>
  );
};
