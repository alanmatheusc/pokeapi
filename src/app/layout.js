import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teste Tecnico - PokeApi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="main">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
