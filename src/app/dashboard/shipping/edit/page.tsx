import '../shipping.css';
import LayoutDashboard from "../../page";
import * as React from "react";
import { TrashIcon } from '@heroicons/react/outline';

export default function Edit() {
    return (
        <LayoutDashboard>
            <div className={'w-full h-full rounded-lg bg-white p-[17px]'}>
                <div className={'box-header flex pb-[20px]'}>
                    <div className={'title'}>
                        <h3>Edit Shipping Comps</h3>
                    </div>
                    <button type="button" className="text-white ml-2 bg-[#EB5757] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[33px]">
                        <TrashIcon className="w-3 h-3 text-white" />
                    </button>
                </div>
                <div className={'grid gap-6 mb-6 md:grid-cols-2'}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#828282] font-semibold dark:text-white">Nama</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </div>
                <button type="button" className="text-white bg-[#4678F3] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Simpan</button>
            </div>
        </LayoutDashboard>
    )
}
