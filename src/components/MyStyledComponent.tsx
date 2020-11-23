import { IStyle, mergeStyleSets } from '@uifabric/merge-styles';
import {
	getTheme
} from "@fluentui/react";

const theme = getTheme();

export interface IComponentClassNames {
	root: string;
	button: string;
	buttonIcon: string;
	parent: string;
}

const getClassNames = (): IComponentClassNames => {
	return mergeStyleSets({
		root: {
			background: 'red',
		},

		button: {
			backgroundColor: 'green',
			// Basic pseudo-selectors
			':hover': {
				background: 'blue'
			},
			// Media and feature queries
			'@media(max-width: 600px)': {
				background: 'green',
			},
		},

		buttonIcon: {
			margin: 10,
		},

		// Parent/child selectors
		parent: {
			backgroundColor: theme.palette.themePrimary,
			'& .child': {
				background: theme.palette.themeSecondary,
				display: 'inline-block',
				fontFamily: 'Proxima Nova'
			}
		},
	});
};


const MyStyledComponent = () => {
	let { root, button, buttonIcon, parent } = getClassNames();

	return (
		<div className={root}>
			<button className={button}>
				<i className={buttonIcon} />
			</button>
			<div className={parent}>
				<div className='child'>
					Children
				</div>
			</div>
		</div>
	);
};

export default MyStyledComponent