import { ReactNode } from "react";
import AuthLottie from "@/components/ChordUI/float/AuthLottie";
import ChordIcon from "@/components/ChordIcon";
import Image from "next/image"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md">
              <ChordIcon 
                width={40}
                height={40} />
            </div>
            Chord
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full ">
            {children}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/icons/echo.png"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default AuthLayout
