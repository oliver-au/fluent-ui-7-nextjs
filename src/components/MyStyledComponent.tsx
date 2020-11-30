import { mergeStyleSets } from '@uifabric/merge-styles';
import {
	getTheme
} from "@fluentui/react";
import variable from '../styles/variables'

const theme = getTheme();

export interface IComponentClassNames {
	root: string;
	button: string;
	buttonIcon: string;
	parent: string;
	child2: string;
}

const getClassNames = (): IComponentClassNames => {

	return mergeStyleSets({
		root: [
			{
			background: 'red',
			}
		],

		button: [
			{
				backgroundColor: 'green',
				// Basic pseudo-selectors
				':hover': {
					background: 'blue'
				},
				// Media and feature queries
				[`@media(max-width: ${variable.md}px)`]: {
					background: 'yellow',
				},
			}
		],

		buttonIcon: [
			{
				margin: 10,
			}
		],

		// Parent/child selectors
		parent: [
			{
				backgroundColor: theme.palette.themePrimary,
				// May use for numerous li in ul
				'& .child1': {
					background: theme.palette.themeSecondary,
					display: 'inline-block',
					fontFamily: 'Proxima Nova'
				}
			}
		],
		child2: [
			{
				backgroundColor: theme.palette.themeTertiary,
				display: 'inline-block'
			}
		],
	});
};


const MyStyledComponent = () => {
	let { root, button, buttonIcon, parent, child2 } = getClassNames();

	return (
		<div className={root}>
			<button className={button}>
				<i className={buttonIcon} />
			</button>
			<div className={parent}>
				<div className='child1'>
					Child1
				</div>
				<div className={child2}>
					Child2
				</div>
			</div>
		</div>
	);
};

export default MyStyledComponent