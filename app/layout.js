import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from '@/components/header';
import Footer from '@/components/footer';

const InterFontFamily = Inter({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={InterFontFamily.className}>
      <body className="container">
      <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
