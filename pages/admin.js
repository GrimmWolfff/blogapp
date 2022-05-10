import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import { signIn, getProviders, useSession } from 'next-auth/react';

import Link from 'next/link';

export default function Admin({ providers }) {
    const router = useRouter();
    return (
        <div className="w-full h-screen flex flex-col items-center justify-around bg-gray-700">
            <Head>
                <title>Admin Page</title>
            </Head>
            <div className="w-1/2 h-full mt-48">
                {providers && Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <div>
                            <button className="button" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return { props: { providers } }
}