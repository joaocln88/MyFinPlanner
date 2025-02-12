import Layout from "src/components/layout";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
