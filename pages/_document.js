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
