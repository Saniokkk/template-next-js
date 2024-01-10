import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
