import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forward Yesterday | Acoustic Trio",
  description:
    "Forward Yesterday is an acoustic trio blending 90's alternative, grunge, and R&B with a fresh, stripped-down sound.",
  keywords: "acoustic trio, music, band, live music, Minneapolis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Pacifico&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
