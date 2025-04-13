import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "STP 25a Grading Form",
  description: "STP 25a grading form 13 April 2025",
icons: {
    icon: "/favicon.svg",  // Link to your favicon file
  },};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}