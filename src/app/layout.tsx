import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Specify font weights
  variable: "--font-lato", // Define a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={lato.variable}>
      <body style={{ fontFamily: 'var(--font-lato)', backgroundColor: '#F5F5DC', margin: '0px' }}>
        {children}
      </body>
    </html>
  );
}
