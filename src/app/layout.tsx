import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import '@/assets/styles/main.css'
import '@/assets/styles/styles.css'
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({subsets: ["cyrillic"]})

export const metadata: Metadata = {
  title: "FunnyCocktail",
  description: "Сервис для создания коктейлей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header/>
        {children}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
