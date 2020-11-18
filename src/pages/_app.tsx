import { loadTheme } from '@fluentui/react';
import { appTheme } from '../styles/theme'

loadTheme(appTheme);

const MyApp = ({ Component, pageProps }) => {

	return (
		<Component {...pageProps} />
	)
}

export default MyApp
