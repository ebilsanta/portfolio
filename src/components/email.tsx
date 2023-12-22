import Side from "@/components/side";
import { motion } from "framer-motion";

export default function Email() {
  return (
    <Side orientation="right" heightToAppear={490}>
      <div
        className="items-center relative rotate-90 translate-x-[7.14rem] -translate-y-80 text-rose-400 hidden xl:flex"
        id="email"
      >
        <motion.div
          className="hover:text-rose-500 transition"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ translateX: -6 }}
          transition={{ duration: 0.05 }}
        >
          <motion.a
            href={`mailto:thaddeusleezx@gmail.com`}
            className="mt-20 mx-auto px-10 font-mono text-xxs leading-lg tracking-wide"
            // animate={{ opacity: 1, x: 0, y: 0,  transition: { duration: 1 } }}
            // initial={{ opacity: 0, x: 30, y: 30 }}
          >
            thaddeusleezx@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </Side>
  );
}
