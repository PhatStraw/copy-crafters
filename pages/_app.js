import "components/styles/globals.css";
import localFont from "next/font/local";

const geistMono = localFont({
  src: [
    {
      path: "../public/GeistMono/GeistMono-Regular.otf",
      weight: "400",
    },

    {
      path: "../public/GeistMono/GeistMono-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-geist-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${geistMono.variable} font-mono`}>
      <nav className="flex items-center justify-start p-6 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">CopyCrafters</h1>
      </nav>
      <Component {...pageProps} />
    </main>
  );
}
