import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./Components/Navigation";
import Card_Template from "./Components/Card_Template";

export const metadata: Metadata = {
  title: "Create Flashcard System",
  description: "Spaced repetition system",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        <Card_Template/>
      </body>
    </html>
  );
}
