import "./globals.css";
import Navigation from "@/src/components/Navigation";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const space = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Navigation />
        <div className="relative w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
