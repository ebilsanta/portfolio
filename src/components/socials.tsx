import Side from "./side";
import { motion } from "framer-motion";
import { socialsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.2
    },
  }),
};

export default function Socials() {
  return (
    <Side orientation="left" heightToAppear={490}>
      <div className="hidden xl:flex xl:flex-col ml-8 mb-72 gap-6">
        {socialsData.map((social, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <a
              className="text-white bg-rose-500 p-4 flex items-center rounded-full outline-none hover:-translate-y-1 focus:scale-105 hover:scale-105 active:scale-105 transition hover:shadow-red-500/50 shadow-lg"
              href={social.link}
              target="_blank"
            >
              {social.icon}
            </a>
          </motion.div>
        ))}
      </div>
    </Side>
  );
}
