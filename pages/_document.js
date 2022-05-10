import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();

    return { html, head, errorHtml, chunks };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="/static/jquery-3.2.1.min.js"></script>
          <script src="/static/jquery.fake-notification.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
