import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pixel-Devlopment",
  description:
    "Welcome to the digital nexus of creativity and technology. captivating experiences that elevate brands. Embrace our seamless development, artistic design, and immersive enchantment. Join us on an exhilarating journey, where possibilities are boundless.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0C10]`}>{children}</body>
    </html>
  );
}
