import LeftSidebar from "@/components/ChordUI/nav/LeftNavbar";
import MobileNav from "@/components/ChordUI/nav/MobileNavbar";
import RightSidebar from "@/components/ChordUI/nav/RightNavbar";
import Navbar from "@/components/ChordUI/nav/TopNavbar";
import {ReactNode} from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <LeftSidebar />
          <main className="flex-1 pt-24 px-4 overflow-y-auto custom-scrollbar">
            {children}
          </main>
          <RightSidebar />
        </div>
        <MobileNav/>
      </div>
    </main>

    )
  }
  
export default RootLayout