import Link from "next/link";
import Side from "@/components/side";
import { motion } from "framer-motion";

export default function Return() {
  return (
    <Side orientation="right" heightToAppear={3800}>
      <Link href="#home" className="text-rose-500 text-5xl">
        <motion.div
          className="border-solid border border-t-0 border-r-4 border-b-4 border-l-0 inline-block p-2 rotate-[45deg] border-rose-500 hover:-translate-y-1 transition"
          animate={{ rotate: 225 }}
          transition={{ duration: 0.1 }}
        />
      </Link>
    </Side>
  );
}
