import "server-only";

//Styles
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import ParticleBackground from "@/layouts/ParticleBackground";
import { AppContextProvider } from '@/context/AppContext';
import PageLoader from "@/layouts/PageLoader";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio - Navithu Sriyananda',
    description: 'Portfolio - Navithu Sriyananda',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.StrictMode>
            <AppContextProvider>
                <html lang="en" >
                    <body className={inter['className']}>
                        <PageLoader />
                        {children}
                        <ParticleBackground />
                    </body>
                </html>
            </AppContextProvider>
        </React.StrictMode>
    )
}