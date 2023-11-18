// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'


/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
         		<meta name="description" content="HEAVY ROCK & ROLL. GET FUCKED." />
				<link rel="icon" href="favicon/favicon.ico"/>
         		<meta property="og:title" content="Goldwölff" />
         		<meta property="og:url" content="https://goldwolffband.com" />
         		<meta property="og:image" content="https://goldwolffband.com/ogimage.jpg" />
         		<meta property="og:type" content="website"/>	
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link
					href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
					rel="stylesheet"
				/>

			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}