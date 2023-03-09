import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;700&display=swap"
					rel="stylesheet"
				/>
				<meta
					name="description"
					content="large scale 3D printing and cnc services"
				/>
				<meta
					property="og:description"
					content="Discover the power of High Precision Engineering - Africa's largest milling and 3D printing machine. Take your manufacturing to the next level with unrivaled precision and efficiency."
				></meta>
				<meta property="og:locale" content="en_US"></meta>
				<meta property="og:type" content="website"></meta>

				<meta property="og:url" content="http://o-megaverse.com/"></meta>
				<meta property="og:site_name" content="Omegaverse"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
