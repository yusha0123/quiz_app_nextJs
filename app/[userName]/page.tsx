import QuizSettings from "@/components/quiz-settings";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function UserPage({ params }: { params: { userName: string } }) {
  const userName = params.userName;
  const decodedUserName = decodeURIComponent(userName);
  console.log("Current Params:", params);

  return (
    <div className="bg-white p-3 shadow-md w-full md:w-[90%] lg:w-[70%] max-w-4xl md:rounded-lg">
      <h1 className="text-2xl lg:text-4xl font-bold text-primary tracking-wider uppercase text-center py-2">
        Welcome to Quizzr, {decodedUserName}
      </h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:px-6 py-3 gap-4">
        <div className="relative h-full">
          <Image
            src={"/hero.webp"}
            alt="hero-image"
            priority
            width={450}
            height={450}
            className="object-cover object-center mx-auto"
          />
        </div>
        <QuizSettings />
      </div>
    </div>
  );
}
