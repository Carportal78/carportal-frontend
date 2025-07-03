"use client";
import Aos from "aos";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import ScrollToTop from "./components/common/ScrollTop";
import styled from "styled-components";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const inter = Inter({ subsets: ["latin"] });

const Body = styled.body`
  font-family: ${inter.family};
  font-size: ${inter.fontSize};
  margin: 0;
  padding: 0;
`;

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <Body>
        {children}
        <ScrollToTop />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rzanly1sva");
            `,
          }}
        />
      </Body>
    </html>
  );
}
