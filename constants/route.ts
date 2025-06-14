import { Home, Plus, Library, Settings } from 'lucide-react';

const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGN: '/SIGN',
    NEW: '/new'
}

export const navigationItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Create", href: "/create", icon: Plus },
    { name: "Settings", href: "/settings", icon: Settings },
];




export default ROUTES;