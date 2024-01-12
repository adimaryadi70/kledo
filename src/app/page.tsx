'use client';
import { useRouter } from 'next/navigation';
import * as React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import {AuthenticationInterfaces} from "../model/authentication/authentication-interfaces";
import {useState} from "react";
import {AuthenticationServices} from "../services/authentication/authentication-services";
import {NotificationError, ResponseServices, SaveStorage} from "../utility/tools";
import StoreProvider from './StoreProvider';
import { PagesLogin } from '@/pages/login/pages-login';

export default function Home() {

  useState(() => {
     SaveStorage();
  });

  return (
    <StoreProvider count={1}>
      <PagesLogin />
    </StoreProvider>
  )
}
