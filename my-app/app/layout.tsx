import type { Metadata } from "next";
import { Inter, Allura } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Minerra",
  description: "Verified mining companies directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font=sans text-base text-enutral-100 bg-neutral-950">
        <Header>
          <Nav/>
        </Header>
        <Main>{children}</Main>
        <Footer/>
      </body>
    </html>
  );
}
