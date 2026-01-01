import Image from "next/image";
import myCover from "@/assets/myCover.png";

export default function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[90vh]
    gap-5  mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={myCover} alt="My Cover" className="rounded-full" />
        <h1 className="text-4xl font-bold mt-4">My Name</h1>
        <p className="text-lg text-gray-600">My Profession</p>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </div>
  );
}
