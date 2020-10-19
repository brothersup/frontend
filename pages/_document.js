import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head>
          <title>lolgle</title>
        </Head>
        <body style={{ height: '100%' }}>
          <Main style={{ height: '100%' }} />
          <NextScript />
        </body>
        <style jsx global>{`
          body #__next {
            height: 100%;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
