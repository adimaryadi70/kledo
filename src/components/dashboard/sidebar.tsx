'use client';
import './sidebar.css';
import { HomeIcon } from '@heroicons/react/outline';
import { TruckIcon } from '@heroicons/react/outline';
import * as React from "react";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const Siderbar = () => {
    const pathname = usePathname();
    const [items] = useState([
        {
            id: 1,
            icons: <HomeIcon className={'w-6 h-6 text-[#828282]'} />,
            active: true,
            text: 'Dashboard',
            page: '/dashboard/home'
        },
        {
            id: 2,
            icons: <TruckIcon className={'w-6 h-6 text-[#828282]'} />,
            active: false,
            text: 'Shipping Comps',
            page: '/dashboard/shipping'
        }
    ]);


    return (
        <div className={'sidebar bg-[#F2F2F2] h-screen m-w-[215px]'}>
            <div className={'menu-list'}>
                {items.map((items) => {
                    return (
                        <Link key={items.id} href={items.page} className={`menu ${pathname === items.page ? 'active':''}`}>
                            {items.icons}
                            <p className={'text-[#828282]'}>{items.text}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};
