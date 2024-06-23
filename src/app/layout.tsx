import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/header";
import '@/assets/styles/main.css'
import '@/assets/styles/styles.css'

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
    <html lang="ru">
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
