import NavLinks from "./NavLinks";



export default function LeftSidebar() {
    return (
        <aside className="hidden pt-24 w-[70px] border-r bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:block">
            <div className="flex h-full flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-8">
                    <NavLinks/>
                </div>
            </div>
        </aside>
    );
}