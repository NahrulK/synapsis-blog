
import React from "react";


import type { Metadata } from "next";
import ButtonPrimary from "@/components/shared/Button/ButtonPrimary";

export const metadata: Metadata = {
  title: "BTIX | Page Not Found 404",
  description: "We can seee found the page you looking for",
};

const Page404 = () => (
  <div className="nc-Page404">
    <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
      {/* HEADER */}
      <header className="text-center max-w-2xl mx-auto space-y-2">
       
        <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
          {`LAMAN YANG ANDA CARI TIDAK TERSEDIA.`}{" "}
        </span>
        <div className="pt-8">
          <ButtonPrimary href="/">Kembali ke Homepage</ButtonPrimary>
        </div>
      </header>
    </div>
  </div>
);

export default Page404;
