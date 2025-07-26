'use client';

import NavControls from './NavControls';
import { usePathname } from 'next/navigation';

export default function NavControlsWrapper() {
    const pathname = usePathname();
    if (pathname === '/login' || pathname === '/home') return null;
    return <NavControls />;
}