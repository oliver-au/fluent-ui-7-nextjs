import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// Fluent UI React (Fabric) 7 or earlier
import { Stylesheet, InjectionMode } from "@uifabric/merge-styles";
import { resetIds } from "@uifabric/utilities";
// Fluent UI React 8+
// import { Stylesheet, InjectionMode } from "@uifabric/merge-styles";
// import { resetIds } from "@uifabric/utilities";

// Do this in file scope to initialize the stylesheet before Fluent UI React components are imported.
const stylesheet = Stylesheet.getInstance();

// Set the config.
stylesheet.setConfig({
	injectionMode: InjectionMode.none,
	namespace: "server",
});

interface Props {
	styleTags: any
}
  

// Now set up the document, and just reset the stylesheet.
export default class MyDocument extends Document<Props> {
	static getInitialProps({ renderPage }) {
		stylesheet.reset();
		resetIds();

		const page = renderPage((App) => (props) => <App {...props} />);

		return { ...page, styleTags: stylesheet.getRules(true) };
	}

	render() {
		return (
			<Html>
				<Head>
				<style type="text/css" dangerouslySetInnerHTML={{__html: this.props.styleTags}} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}