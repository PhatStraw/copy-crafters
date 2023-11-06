import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="flex items-center justify-start p-6 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">CopyCrafters</h1>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
