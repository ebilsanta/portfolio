import Side from "@/components/side";
import { motion } from "framer-motion";

export default function Email() {
  return (
    <Side orientation="right" heightToAppear={490}>
      <div
        className="items-center relative rotate-90 translate-x-[7.14rem] -translate-y-80 text-rose-400 hidden xl:flex"
        id="email"
      >
        <div
          className="hover:-translate-x-2 hover:text-rose-500 transition"
        >
          <motion.a
            href={`mailto:thaddeusleezx@gmail.com`}
            className="mt-20 mx-auto px-10 font-mono text-xxs leading-lg tracking-wide"
            animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, x: 30 }}
          >
            thaddeusleezx@gmail.com
          </motion.a>
        </div>
      </div>
    </Side>
  );
}
