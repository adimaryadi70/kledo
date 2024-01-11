'use client';
import { useRouter } from 'next/navigation';
import {useState} from "react";

export const Header = () => {
    const router = useRouter();
    const isLogin = useState(false);
    const initialMounted = () => {
    };

    useState(() => {
        initialMounted();
    });

    const routerPage = (page: string) => {
        router.push(page);
    };
    return (
        <div className={'border-solid border-0 h-[59px] color-primary flex justify-between pr-5 pl-5 items-center'}>
            <div className={'logo'}>
                <p className={'uppercase text-[21px] text-white font-semibold'}>Kledo Test</p>
            </div>
            <div className={'navigation flex flex-row'}>
                <div className={'list pr-[5px] pl-[5px]'}>
                    <p onClick={() => routerPage('/profile')} className={'text-white cursor-pointer text-[16px]'}>Profile</p>
                </div>
                <div className={'list pr-[5px] pl-[5px]'}>
                    <p onClick={() => routerPage('/')} className={'text-white cursor-pointer text-[16px]'}>Login</p>
                </div>
            </div>
        </div>
    )
};
