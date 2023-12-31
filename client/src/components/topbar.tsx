import React from "react";
import { Logo } from "@/components/logo";

export function Topbar() {
  return (
    <div className="relative hidden h-full flex-col p-5  text-white dark:border-r lg:flex justify-center items-center">
      <div className="relative z-20 flex items-center text-black text-lg font-medium justify-center">
        <Logo />
        <h1 className="font-tiempos-headline text-2xl">Meal Metrics</h1>
      </div>
    </div>
  );
}
