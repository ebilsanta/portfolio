import Link from "next/link";
import Side from "@/components/side";

export default function Return() {
  return (
    <Side orientation="right" heightToAppear={3800}>
      <Link href="#home" className="text-rose-500 text-5xl">
        <div className="border-solid border border-t-0 border-r-4 border-b-4 border-l-0 inline-block p-2 rotate-[-135deg] border-rose-500 hover:-translate-y-1 transition"/>
      </Link>
    </Side>
  );
}
