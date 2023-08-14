import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'

const interVar = localFont({
    src: [
        {
            path: '../public/Inter-roman-latin.var.18496762.woff2',
            weight: '100 900',
            style: 'normal'
        },
        {
            path: '../public/Inter-italic-latin.var.884de12f.woff2',
            weight: '100 900',
            style: 'italic'
        },
    ]
});

export default function RootLayout({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
                <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png'/>
                <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png'/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ThemeProvider attribute='class'>
                    <NextNProgress
                        color='#3b82f6'
                        options={{
                            showSpinner: false
                        }}
                    />
                <div className={`antialiased ${interVar.className}`}>
                    <Component {...pageProps}/>
                </div>
            </ThemeProvider>
        </>
    )
}
