import Layout from "../layouts";
import "../styles/globals.css";
import createAxiosInstance from "../context/AxiosContext";
import { SessionProvider, useSession } from "next-auth/react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <InnerApp Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}

function InnerApp({ Component, pageProps, contentType }) {
  const { data: session } = useSession();
  const axiosInstance = createAxiosInstance(apiUrl, session, contentType);

  if (typeof window !== "undefined") {
    window.$axios = axiosInstance;
  }
  return (
    <Layout>
      <Component axios={axiosInstance} {...pageProps} />
    </Layout>
  );
}
