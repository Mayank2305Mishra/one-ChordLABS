'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { navigationItems } from '@/constants/route';

const NavLinks = () => {
    const pathname = usePathname();
    return (
        <>
            {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "group relative rounded-full p-2 transition-all text-muted-foreground hover:text-foreground ",
                            isActive && [
                                "text-foreground",
                            ]
                        )}
                    >
                        <Icon className="h-5 w-5" />
                        <span className="absolute -top-8 left-1/2 hidden -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs text-white group-hover:block dark:bg-white dark:text-black">
                            {item.name}
                        </span>
                    </Link>
                );
            })}
        </>
    )
}

export default NavLinks