'use client';
import * as React from "react";
import {useState} from "react";
import {ReadStorage, SaveStorage} from "../utility/tools";
import StoreProvider from './StoreProvider';
import StorageProvider from "./StorageProvider";
import { PagesLogin } from '@/components/login/pages-login';

export default function Home() {
  const initial = {
    data: null
  };

  useState(() => {
     SaveStorage('stest', ["asdad","asdiadjiadj","asdjiadjiadiwji"]);
     ReadStorage('stest').then((result) => {
        console.log(result);
     });
  });

  return (
    <StorageProvider data={initial}>
      <PagesLogin />
    </StorageProvider>
  )
}
