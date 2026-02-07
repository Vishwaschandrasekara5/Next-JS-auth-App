'use client';

import React from 'react'
import Image from 'next/image'
import { signIn } from "next-auth/react";

export default function SigninBtn() {
  return (
    <div>

        <button 
            onClick={() => signIn("google")}
            className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
             <Image src={"/google.png"} alt="Google Logo" width={30} height={30}/>
             <span className="bg-blue-500 text-white px-4 py-3">Sign in with Google</span>
        </button>

    </div>
  )
}
