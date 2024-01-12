import './dashboard.css';
import {Header} from "../../components/common/header";
import * as React from "react";
import {Siderbar} from "../../components/dashboard/sidebar";

export default function LayoutDashboard({ children } : any) {
    return (
        <div className={'dashboard'}>
            <Header />
            <div className={'main-dashboard flex flex-row'}>
                <div className="basis-1/4">
                    <Siderbar />
                </div>
                <div className="basis-full bg-[#BDBDBD] pt-[17px] pl-[21px] pr-[21px] pb-[21px]">{children}</div>
            </div>
        </div>
    )
}
