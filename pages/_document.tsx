import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="scroll-smooth font-['Balsamiq Sans'] min-h-screen bg-[#313338] text-white text-md selection:bg-[#919191] selection:text-[#0e0e0e]">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
