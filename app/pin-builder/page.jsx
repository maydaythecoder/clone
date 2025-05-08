'use client'

import React from "react";
import dynamic from 'next/dynamic';

// Dynamically import the Form component with SSR disabled
const Form = dynamic(() => import('./../components/Form'), { ssr: false });

export default function PinBuilder() {
  return (
    <div
      className="bg-[#e9e9e9] min-h-screen p-8 
    px-[10px] md:px-[160px]"
    >
      <Form />
    </div>
  );
}

