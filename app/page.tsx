import Image from "next/image";
import hero from "@/public/hero.png";
import stand from "@/public/stand.png";
import RollingText from "@/components/RollingText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-black">
      <RollingText />
      <Image src={hero} alt="CAAATTT" />

      <div className="flex flex-row text-white gap-x-32">
        <Link href={"https://x.com/StalinsCatOnSol"} target="blank">
          <div className="items-center justify-center flex flex-col">
            <div className="bg-white h-20 w-20 rounded-full shadow-lg shadow-red-700 overflow-hidden items-center justify-center flex">
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                }
                alt="x logo"
                width={50}
                height={50}
              />
            </div>
            <span>Twitter</span>
          </div>
        </Link>

        <Link href={"https://t.me/StalinCatLover"} target="blank">
          <div className="items-center justify-center flex flex-col">
            <div className="bg-white h-20 w-20 rounded-full shadow-lg shadow-red-700 overflow-hidden items-center justify-center flex">
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Telegram_X_2019_Logo.svg"
                }
                alt="x logo"
                width={50}
                height={50}
              />
            </div>
            <span>Telegram</span>
          </div>
        </Link>

        <div className="items-center justify-center flex flex-col">
          <div className="bg-white h-20 w-32 rounded-full shadow-lg shadow-red-700 items-center justify-center flex">
            <span className="text-black font-extrabold text-2xl">MoonShot</span>
          </div>
          <span>MoonShot</span>
        </div>
      </div>
      <div className="flex justify-center w-full bg-white">
        <span className="text-[60px] font-extrabold text-red-800">
          Staliens Cat Really Likes You Comerades
        </span>
      </div>
      <Image src={stand} alt="war" />
    </div>
  );
}
