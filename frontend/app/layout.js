import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import AnimationProvider from "@/components/providers/AnimationProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Handwritten note next to the student ("Your Global Education Partner")
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  title: "University Yatra – Making Global Education Easy",
  description:
    "Explore top universities, discover the best courses, and get expert advice — all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="bg-white text-slate-900">
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
