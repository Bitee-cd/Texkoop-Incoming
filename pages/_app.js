import { Router } from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";
import "../styles/globals.css";
import Preloader from "../components/PreLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setTimeout(() => {
      setLoading(false);
    });
  });
  return <>{loading ? <Preloader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
