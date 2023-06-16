import React from 'react';
import '../app/globals.css'
import ProtectedRoutes from "@/providers/protectedRoutes";
export default function ({ Component, pageProps }) {
    return <>
        <ProtectedRoutes>
            <Component {...pageProps} />
        </ProtectedRoutes>
    </>
}


