import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Navbar from "@/component/Navbar";
import Sidebar from "@/component/Sidebar";
import BottomNav from "@/component/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube",
  description: "A social media plateform's copy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div className="wrapper">
          <Navbar/>
          <div className="inner-wrapper">
            <aside className="asidbar">
              <Sidebar/>
            </aside>
            <main className="main-tag">
              {children}
            </main>
          </div>
          <BottomNav/>
        </div>        
      </body>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}
