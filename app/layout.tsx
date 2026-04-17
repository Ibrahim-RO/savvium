import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToastContainer from "@/shared/components/ToastContainer";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import AOSProvider from "../components/ui/AOSProvider";

const chakraPetch = localFont({
  src: [
    { path: './fonts/ChakraPetch-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/ChakraPetch-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/ChakraPetch-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/ChakraPetch-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/ChakraPetch-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  title: "Savvium - ERP",
  description: "Sistema de gestión para tu empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (     
    <html lang="es">
      <body className={`${chakraPetch.className} antialiased text-gray-900 bg-white`}>
        <Header />
        <AOSProvider />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}