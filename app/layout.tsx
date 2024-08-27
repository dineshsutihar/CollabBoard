import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollabBoard",
  description: "A collaborative whiteboard for remote teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
