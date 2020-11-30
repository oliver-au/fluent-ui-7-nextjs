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
	parent3: string;
	child3: string;
	child4: string;
}

const classNames = {
	parent3: 'My-paren-3',
	child4: 'My-Child-4'
};

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

		parent3: [
			classNames.parent3,
			{
				'& > li': {
					backgroundColor: 'green'
				}
			}
		],

		child3: [
			{
				backgroundColor: 'blue',
				':hover': {
					background: 'white'
				},
			}
		],
		
		child4: [
			classNames.child4,
			{
			  [`.${classNames.parent3}:hover &`]: {
				background: 'green',
			  },
			},
		],

	});
};


const MyStyledComponent = () => {
	let { root, button, buttonIcon, parent, child2, parent3, child3, child4 } = getClassNames();

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
			<div className={parent3}>
				<div className={child3}>
					Child3
				</div>
				<div className={child4}>
					Child4
				</div>
				<li>li1</li>
				<li>li2</li>
			</div>
		</div>
	);
};

export default MyStyledComponent