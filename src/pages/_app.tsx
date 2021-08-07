import React, { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import { GlobalStyle } from 'components/layouts/GlobalStyle'
import environment from 'shared/constants/environment'
import AppTheme from 'components/layouts/AppTheme'
import '@fontsource/roboto'

const { bugsnagApiKey } = environment

if (bugsnagApiKey && bugsnagApiKey !== '') {
	Bugsnag.start({
		apiKey: environment.bugsnagApiKey,
		plugins: [new BugsnagPluginReact()],
		releaseStage: process.env.releaseStage,
		enabledReleaseStages: ['production', 'staging'],
	})
}

function MyApp({ Component, pageProps }: AppProps): ReactNode {
	return (
		<AppTheme>
			<GlobalStyle />
			<Component {...pageProps} />
		</AppTheme>
	)
}
export default MyApp
