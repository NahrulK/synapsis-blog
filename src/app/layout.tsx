import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
        <body className=" bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <Header/>
          {children}
          <Footer/>
          <Toaster richColors expand={true} closeButton />
        </body>
    </html>
  );
}
