'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/outline';
import { ShippingModel } from '@/model/shipping/shipping-model';
import { PostShippingServices, PutShippingServices, DeleteShippingServices } from '@/services/shipping/shipping-services';
import { NotificationError, ReadStorage, ResponseServices } from '@/utility/tools';
import { useRouter } from 'next/navigation';
interface FormShippingComponent {
    isEdit: boolean;
    title: string;
}

export const FormShipping: React.FC<FormShippingComponent> = ({ isEdit , title }) => {
    const [isLoading, setLoading] = useState(false);
    const [loadingDelete,setLoadingDelete] = useState(false);
    const { register, handleSubmit,setValue, formState } = useForm<ShippingModel>();
    const { errors } = formState;
    const router = useRouter();
    const onSubmit: SubmitHandler<ShippingModel> = (data) => {
        console.log(data);
        if (!isEdit) {
            SaveShipping(data);
        }
        if (isEdit) {
            UpdateShipping(data);
        }
    }
    const DeleteShipping = () => {
        let read = ReadStorage('data_shipping');
        let req: ShippingModel = {
            name: read.name,
            id: read.id
        };
        setLoadingDelete(true);
        DeleteShippingServices(req)
            .then((result) => {
                setLoadingDelete(false);
                if (ResponseServices(result)) {
                    return router.push('/dashboard/shipping');
                }
            })
            .catch((e) => {
                setLoading(false);
                return NotificationError(e);
            });
    };
    const UpdateShipping = (data: ShippingModel) => {
        setLoading(true);
        let read = ReadStorage('data_shipping');
        let req: ShippingModel = {
            name: data.name,
            id: read.id
        };
        PutShippingServices(req)
            .then((result) => {
                setLoading(false);
                if (ResponseServices(result)) {
                    return router.push('/dashboard/shipping');
                }
            })
            .catch((e) => {
                setLoading(false);
                return NotificationError(e);
            });
    }
    const SaveShipping = (data: ShippingModel) => {
        setLoading(true);
        let req: ShippingModel = {
            name: data.name
        };
        PostShippingServices(req)
            .then((result) => {
                console.log(result);
                setLoading(false);
                if (ResponseServices(result)) {
                    return router.push('/dashboard/shipping');
                }
            })
            .catch((e) => {
                setLoading(false);
                return NotificationError(e);
            });
    }
    useState(() => {
        let read = ReadStorage('data_shipping');
        setValue('name', read.name);
    });
    return (
        <div className={'w-full h-full rounded-lg bg-white p-[17px]'}>
                <div className={'box-header flex pb-[20px]'}>
                    <div className={'title'}>
                        <h3>{title}</h3>
                    </div>
                    {isEdit ? 
                        <button disabled={loadingDelete} onClick={DeleteShipping} type="button" className="text-white ml-2 bg-[#EB5757] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[33px]">
                            {!loadingDelete ?
                                <TrashIcon className="w-3 h-3 text-white" /> :
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                </svg>
                            }
                        </button> : ''
                    }
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'grid gap-6 mb-6 md:grid-cols-2'}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-[#828282] font-semibold dark:text-white">Nama</label>
                                <input 
                                    {...register('name', {required: 'Nama Diwajibkan'})}
                                    type="text" 
                                    id="first_name" 
                                    className={errors.name ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[8px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                                />
                                {errors.name && <p className={'mt-2 text-sm text-red-600 dark:text-red-500'}>{errors.name.message}</p>}
                            </div>
                    </div>
                    <button disabled={isLoading} type="submit" className="text-white bg-[#4678F3] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {!isLoading ?
                        <span>Simpan</span> :
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                        </svg>
                    }
                    </button>
                </form>
        </div>
    )
}