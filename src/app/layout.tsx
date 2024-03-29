import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from './components/SmoothScrolling';

;

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",

  
});

export const metadata: Metadata = {
  title: "Obralink",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}