import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import ReactGA from "react-ga"

const TRACKING_ID = "G-MN1E5QZBMW"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return <Component {...pageProps} />
}
