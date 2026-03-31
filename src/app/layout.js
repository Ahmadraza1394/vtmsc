import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Voice Tabernacle - Building Community",
  description: "A community of faith, hope, and love",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={playfair.variable}
      suppressHydrationWarning={true}
    >
      <body
        className={`${lato.variable} font-lato`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
