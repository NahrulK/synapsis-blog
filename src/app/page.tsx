import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionBlogList from "@/components/Blogs/SectionBlogList";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Synapsis Blog | Nahrul K",
  description: "A blog app for Synapsis Challenge",
};

export default function Home({searchParams} : {searchParams: {  pageIndex?: string }}) {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      <div className="container relative">
        {/* === SECTION  === */}
        <div className="pt-12 pb-16 lg:pb-28">
          <SectionBlogList searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
