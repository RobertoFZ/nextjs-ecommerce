import React from 'react'
import NextHead from 'next/head'
import { Else, If, Then, When } from 'react-if'
export interface IOpenGraphMetas {
	title: string
	type: string
	url: string
	image: string
	description: string
}

type IHead = {
	title?: string
	description?: string
	subject?: string
	copyright?: string
	language?: string
	openGraph?: IOpenGraphMetas
	keyworkds?: string
	noIndex?: boolean
}

const Head = ({
	title = "Roberto's NextJS Boilerplate",
	description = '',
	subject = '',
	copyright = "Roberto's NextJS Boilerplate",
	language = 'es',
	openGraph,
	keyworkds = '',
	noIndex = false,
}: IHead) => {
	if (!openGraph) {
		openGraph = {
			title,
			type: '',
			url: `${process.env.applicationUrl}`,
			image: `${process.env.applicationUrl}/vercel.svg`,
			description: '',
		}
	}
	return (
		<NextHead>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
			<link rel="apple-touch-icon" href="/apple-icon.png" />
			<link
				rel="apple-touch-icon"
				sizes="57x57"
				href="/apple-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/apple-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/apple-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="/apple-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<meta name="keywords" content={keyworkds} />
			<meta name="description" content={description} />
			<meta name="subject" content={subject} />
			<meta name="copyright" content={copyright} />
			<meta name="language" content={language} />
			<meta property="fb:app_id" content={null} />

			<If condition={noIndex}>
				<Then>
					<>
						<meta name="robots" content="noindex" />
						<meta name="googlebot" content="noindex" />
					</>
				</Then>
				<Else>
					<meta name="robots" content="index, follow" />
				</Else>
			</If>
			<meta httpEquiv="content-language" content={language} />
			<When condition={openGraph !== undefined && openGraph !== null}>
				<>
					<meta
						name="og:title"
						property="og:title"
						content={openGraph.title}
					/>
					<meta
						name="og:type"
						property="og:type"
						content={openGraph.type}
					/>
					<meta name="og:url" property="og:url" content={openGraph.url} />
					<meta
						name="og:image"
						property="og:image"
						content={openGraph.image}
					/>
					<meta
						name="og:site_name"
						property="og:site_name"
						content={title}
					/>
					<meta
						name="og:description"
						property="og:description"
						content={openGraph.description}
					/>
				</>
			</When>
		</NextHead>
	)
}

export default Head
