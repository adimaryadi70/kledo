'use client';
import * as React from "react";
import StorageProvider from "./StorageProvider";
import { PagesLogin } from '@/components/login/pages-login';

export default function Home() {
  const initial = {
    data: null
  };

  return (
    <StorageProvider data={initial}>
      <PagesLogin />
    </StorageProvider>
  )
}
