import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local"

const nunito = Nunito({ subsets: ["latin"] });
const anko = localFont({
  src:[
    {
      path:'../../public/fonts/Anko-Bold.otf',
      weight:'700',
      style:'normal'
    },
    {
      path:'../../public/fonts/Anko-BoldItalic.otf',
      weight:'700',
      style:'italic'
    },
    {
      path:'../../public/fonts/Anko-Medium.otf',
      weight:'500',
      style:'normal'
    },
    {
      path:'../../public/fonts/Anko-MediumItalic.otf',
      weight:'500',
      style:'italic'
    },
    {
      path:'../../public/fonts/Anko-Regular.otf',
      weight:'400',
      style:'normal'
    },
    {
      path:'../../public/fonts/Anko-RegularItalic.otf',
      weight:'400',
      style:'italic'
    },
    {
      path:'../../public/fonts/Anko-SemiBoldItalic.otf',
      weight:'600',
      style:'normal'
    },
    {
      path:'../../public/fonts/Anko-SemiBoldItalic.otf',
      weight:'600',
      style:'italic'
    },
    
  ],
  variable:'--font-anko'
})
export const metadata: Metadata = {
  title: "Omicrxn",
  description:
    "Welcome to my portfolio, I am Omicrxn a software developer and designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anko.variable}`}>
      <body className={`${nunito.className} bg-omi-white overflow-hidden`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
