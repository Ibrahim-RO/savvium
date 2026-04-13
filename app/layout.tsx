import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToastContainer from "@/src/shared/components/ToastContainer";

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
<<<<<<< HEAD
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToastContainer />
      </body>      
=======
    <html lang="es">
      <body className={`${chakraPetch.className} antialiased text-gray-900 bg-white`}>
        {children}
      </body>
>>>>>>> 6620009fcdaf82408bbb21d5d2ddc5598a3513e7
    </html>
  );
}