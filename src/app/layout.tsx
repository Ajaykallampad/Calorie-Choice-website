import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Calorie Choice - Premium Health-Tech Cloud Kitchen",
  description: "Fresh scientifically-balanced meals designed for fitness, weight management, and healthy lifestyles — delivered across Palakkad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gray-bg`}>
        {children}
      </body>
    </html>
  );
}
