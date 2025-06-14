import { ReactNode } from "react";
import AuthLottie from "@/components/ChordUI/float/AuthLottie";
import ChordIcon from "@/components/ChordIcon";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-screen md:flex-row  flex-col">
      <div className="md:w-1/2 flex flex-col items-center h-screen justify-center text-center">
      <div className="flex flex-row gap-2">
        <ChordIcon width={40} height={40}/>
        <div className="h-[40px] pt-1 flex flex-col justify-center items-center text-center ">
        <h1 className="text-2xl font-bold">ChordLABS</h1>
        </div>
      </div>
        {children}
      </div>
      <div className="md:w-1/2 flex flex-col items-center h-screen justify-center text-center">
        <AuthLottie />
      </div>
    </main>
  )
}

export default AuthLayout
