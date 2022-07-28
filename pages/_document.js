import { GTM_ID } from '@/lib/gtm';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta property="og:url" content="https://brandonpalmeros.me" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dlomynswh/image/upload/v1655482326/my-portfolio/og-image.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#171717" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
