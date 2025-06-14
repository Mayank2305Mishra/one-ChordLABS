
import { Play, SkipBack, SkipForward } from 'lucide-react';
import NavLinks from './NavLinks';


export default function MobileNav() {

    return (
        <div className="fixed bottom-4 left-1/2  z-50 w-[93%] -translate-x-1/2 lg:hidden animate-slide-up">
            <div className=" rounded-3xl border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                {/* Navigation Bar */}
                <div className="flex items-center justify-between px-6 py-2">
                    <NavLinks/>
                </div>
            </div>
        </div>
    );
}