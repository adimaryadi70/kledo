'use client';
import { useRouter } from 'next/navigation';
import {useEffect, useState} from "react";
import {ReadStorage} from "../../utility/tools";
import Image from "next/image";
import * as React from "react";

export const Header = () => {
    const router = useRouter();
    const [isLogin, setisLogin] = useState<boolean>(false);
    useEffect(() => {
        let read = ReadStorage('token');
        setisLogin(true);
        if (!read) {
            setisLogin(false);
        }
    },[]);

    const routerPage = (page: string) => {
        router.push(page);
    };
    return (
        <div className={'border-solid border-0 h-[59px] color-primary flex justify-between pr-5 pl-5 items-center'}>
            <div className={'logo'}>
                <p className={'uppercase text-[21px] text-white font-semibold'}>Kledo Test</p>
            </div>
            <div className={'navigation flex flex-row'}>
                {isLogin ?
                    <div className={'profile flex flex-row items-center'}>
                        <Image
                            sizes="100vw"
                            style={{
                                width: '28%',
                                height: 'auto',
                            }}
                            width={600}
                            height={600}
                            className="w-10 h-10 rounded-full relative"
                            src="/images/profile.png"
                            alt="header avatar"
                        />
                        <h3 className={'text-[white] ml-[10px] text-[18px]'}>Tony Stark</h3>
                    </div> :
                    <div className={'flex flex-row'}>
                        <div className={'list pr-[5px] pl-[5px]'}>
                            <p onClick={() => routerPage('/profile')} className={'text-white cursor-pointer text-[16px]'}>Profile</p>
                        </div>
                        <div className={'list pr-[5px] pl-[5px]'}>
                            <p onClick={() => routerPage('/')} className={'text-white cursor-pointer text-[16px]'}>Login</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};
