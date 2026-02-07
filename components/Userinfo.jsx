'use client'; 

import React from 'react'
import SigninBtn from './SigninBtn'
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Userinfo() {
    const {status, data:session} = useSession();

    if (status === "authenticated"){
        return(
            <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
                <Image src={session?.user?.image} alt="User Image" width={60} height={60} className="rounded-full"/>
                <h2 className="text-2xl font-bold mt-4">{session.user.name}</h2>
                <p className="text-gray-600 font-bold">{session.user.email}</p>
            </div>
        )
    }else{
        return(<SigninBtn/>)
    }
}
