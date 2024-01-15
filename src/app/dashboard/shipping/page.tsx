'use client';
import { useRouter } from 'next/navigation';

import LayoutDashboard from "../page";
import { PlusIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import './shipping.css';
import {useState} from "react";
import {GetShippingServices} from "../../../services/shipping/shipping-services";
import { ShippingModel } from '@/model/shipping/shipping-model';
import { ResponseServices } from '@/utility/tools';

export default function Shipping() {
    const router = useRouter();
    const [table, setTable] = useState<ShippingModel[]>([]);
    const routerPage = (page: string) => {
        router.push(page);
    };
    const GetShipping = () => {
        GetShippingServices()
            .then((result) => {
                if (ResponseServices(result)) {
                    console.log(result);
                    setTable(result.data.data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useState(() => {
        GetShipping();
    });

    return (
        <LayoutDashboard>
            <div className={'w-full h-full rounded-lg bg-white p-[17px]'}>
                <div className={'box-header flex justify-between'}>
                    <div className={'flex'}>
                        <div className={'title'}>
                            <h3>Shipping</h3>
                        </div>
                        <button onClick={() => routerPage('/dashboard/shipping/add')} type="button" className="text-white ml-2 bg-[#2F80ED] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[33px]">
                            <PlusIcon className="w-3 h-3 text-white" />
                        </button>
                    </div>
                    <div className={'filter'}>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <SearchIcon className="w-5 h-5" />
                            </div>
                            <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pt-[10px] pb-[10px]" placeholder="Search" required />
                        </div>
                    </div>
                </div>
                <div className={'tables pt-[20px]'}>
                    <div className={'relative overflow-x-auto shadow-md sm:rounded-lg'}>
                        <table className={'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'}>
                            <thead className={'text-xs text-gray-700 uppercase bg-[#F2F2F2] dark:bg-[#F2F2F2] dark:text-gray-400'}>
                                <tr>
                                    <th scope="col" className="px-6 py-3 capitalize">
                                        Nama
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.map((items) => {
                                    return (
                                        <tr className={'odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'}>
                                            <th className="px-6 py-4">{items.name}</th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </LayoutDashboard>
    )
}
