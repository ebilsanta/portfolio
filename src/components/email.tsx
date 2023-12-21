import Side from "@/components/side";

export default function Email() {
  return (
    <Side orientation="right">
      <div className="flex flex-col items-center relative" id="email">
        <div className="after:block after:content-[''] after:w-1 after:h-90 after:m-0 after:mx-auto after:bg-light-slate"></div>
        <a
          href={`mailto:thaddeusleezx@gmail.com`}
          className="mt-20 mx-auto px-10 font-mono text-xxs leading-lg tracking-wide transform hover:translate-x-[-4px] focus:translate-y-[-3px] transition"
        >
          thaddeusleezx@gmail.com
        </a>
      </div>
    </Side>
  );
}
