import Image from 'next/image'
import {Header} from "../../components/common/header";
import * as React from "react";
import './profile.css';
export default function Profile() {
    return (
        <div className={'profile'}>
            <Header />
            <div className={'title text-center mt-[94px] mb-[21px]'}>
                <h3 className={'font-bold text-[28px]'}>Profile</h3>
            </div>
            <div className={'box-profile'}>
                <div className={'flex flex-row'}>
                    <div className={'grow h-[10] w-60'}>
                        <div className={'box-list'}>
                            <h3>Nama</h3>
                            <p>Tony Stark</p>
                        </div>
                        <div className={'box-list'}>
                            <h3>Alamat</h3>
                            <p>Malybu Mansion</p>
                        </div>
                        <div className={'box-list'}>
                            <h3>No. HP</h3>
                            <p>212-970-4133</p>
                        </div>
                        <div className={'box-list'}>
                            <h3>Email</h3>
                            <p>@starkenterprises.com</p>
                        </div>
                        <div className={'box-list'}>
                            <h3>Motto</h3>
                            <p>The best thing about a boolean is even if you are wrong, you are only off by a bit.</p>
                        </div>
                    </div>
                    <div className={'grow h-[5] text-center'}>
                        <Image
                            sizes="100vw"
                            style={{
                                width: '68%',
                                height: 'auto',
                            }}
                            width={600}
                            height={600}
                            className="w-10 h-10 rounded-full relative left-[30px]"
                            src="/images/profile.png"
                            alt="Rounded avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
