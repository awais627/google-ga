import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Helmet} from "react-helmet"
export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QRH59H5K1J"></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-QRH59H5K1J');`}
                </script>
            </Helmet>
            <Component {...pageProps} />
        </>
    )
}
