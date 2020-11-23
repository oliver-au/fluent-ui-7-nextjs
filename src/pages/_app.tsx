import { loadTheme } from '@fluentui/react';
import { appTheme } from '../styles/theme'
import { porximaNovaRegular } from '../styles/fonts'
import { fontFace } from '@uifabric/merge-styles';

fontFace(porximaNovaRegular);
// https://github.com/microsoft/fluentui/blob/master/packages/merge-styles/README.md#registering-keyframes

loadTheme(appTheme);

const MyApp = ({ Component, pageProps }) => {

	return (
		<Component {...pageProps} />
	)
}

export default MyApp
