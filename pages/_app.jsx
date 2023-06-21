import Layout from "../layouts";
import "../styles/globals.css";
import createAxiosInstance from "../context/AxiosContext";
import { SessionProvider, useSession } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../redux/store";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <InnerApp Component={Component} pageProps={pageProps} />
      </SessionProvider>
    </Provider>
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
