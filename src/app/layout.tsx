import type { Metadata } from "next";
import '../styles/globals.css';
import Navbar from "@/components/NavBar";
import Rightbar from "@/components/RightBar";


export const metadata: Metadata = {
  title: "ZuAI - IB Page",
  description: "IB Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-lightBlue"> <Navbar /> {children} <Rightbar /></body>
    </html>
  );
}
