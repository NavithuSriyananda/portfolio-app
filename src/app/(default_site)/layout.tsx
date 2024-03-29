import "server-only";

import type { Metadata } from 'next'
import React from 'react';
import NavBar from "@/layouts/navbar/NavBar";
import Footer from "@/layouts/footer/Footer";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  var appVersion: string = process.env.APP_VERSION ?? "";
  return (
    <>
      <NavBar />
      <div className="mt-16 sm:mt-0">
        {children}
      </div>
      <Footer AppVersion={appVersion} />
    </>
  )
}