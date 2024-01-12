'use client';
import { useRouter } from 'next/navigation';
import {Header} from "../components/common/header";
import * as React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import {AuthenticationInterfaces} from "../model/authentication/authentication-interfaces";
import {useState} from "react";
import {AuthenticationServices} from "../services/authentication/authentication-services";
import {NotificationError, ResponseServices, SaveStorage} from "../utility/tools";

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<AuthenticationInterfaces>();
  const { errors } = formState;
  const [isLoading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<AuthenticationInterfaces> = (data) => {
      console.log(data);
      setLoading(true);
      let req: AuthenticationInterfaces = {
          email: data.email,
          password: data.password
      };
      AuthenticationServices(req)
          .then((result) => {
             if (ResponseServices(result)) {
                 setLoading(false);
                 return router.push('/dashboard/home');
             }
          })
          .catch((e) => {
             setLoading(false);
             return NotificationError(e);
          });
  };

  useState(() => {
     SaveStorage();
  });

  return (
      <div className={'body'}>
        <Header />
        <div className={'title text-center mt-[94px] mb-[21px]'}>
            <h3 className={'font-bold text-[28px]'}>Login</h3>
        </div>
        <div className={'login'}>
            <form className={'max-w-sm mx-auto'} onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email',{required: 'Email di wajibkan'})}
                        className={errors.email ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[8px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                    />
                    {errors.email && <p className={'mt-2 text-sm text-red-600 dark:text-red-500'}>{errors.email.message}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password',{required: 'Password di wajibkan'})}
                        className={errors.password ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400' : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[8px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                    />
                    {errors.password && <p className={'mt-2 text-sm text-red-600 dark:text-red-500'}>{errors.password.message}</p>}
                </div>
                {isLoading}
                <div className={'mb-5'}>
                    <button disabled={isLoading} type={'submit'} className={'rounded-full color-primary w-full text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:color-primary focus:outline-none dark:focus:color-primary font-semibold'}>
                        {!isLoading ?
                            <span>Login</span> :
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                        }
                    </button>
                </div>
            </form>
        </div>
      </div>
  )
}
