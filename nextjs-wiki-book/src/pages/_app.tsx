import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle
`
html,
body,
textare {
    padding: 0;
    margin: 0;
    font-familty: -apple-SYSTEM_ENTRYPOINTS, BlinkMacSystemFont, Segon UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sansserif;
}

* {
    box-sizing: border-box;
}

a {
    cursor: 
}
`


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Head>
            <meta key="charset" name='charset' content='utf-8' />
            <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1, shrink-tofit=no, maximum-scale=5' />
            <meta property='og:locale' content='ko_KR' />
            <meta property='og:type' content='website' />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp