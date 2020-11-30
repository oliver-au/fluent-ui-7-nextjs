import React from 'react'
import { mergeStyleSets } from '@uifabric/merge-styles';

interface IComponentClassNames {
	root: string
	c1: string
	c2: string
	c3: string
	c4: string
	c5: string
	p1: string
}

const classNames = {
	c1: 'c1',
	c2: 'c2',
	c3: 'c3',
	c4: 'c4',
	c5: 'c5',
	p1: 'p1'
};

const getClassNames = (): IComponentClassNames => {

	return mergeStyleSets({
		root: [
			{
				background: 'red',
			}
		],
		c1: [
			// Customizing class name
			classNames.c1,
			{
				// Css Selector
				'&:hover + .c2': {
					background: 'yellow'
				},
				'&:hover + .c2 + .c3': {
					background: 'purple'
				}
			}
		],
		c2: [
			classNames.c2,
			{
				'&:hover ~ .c3': {
					background: 'green'
				}
			}
		],
		c3: [
			classNames.c3,
			{
				
			}
		],
		c4: [
			classNames.c4,
			{
				[`.${classNames.p1}:hover &`]: {
					background: 'orange',
				},
			}
		],
		c5: [
			classNames.c5,
			{
				
			}
		],
		p1: [
			classNames.p1,
			{
				'&:hover > .c5': {
					background: 'blue'
				}
			}
		]
	})
}		

const CssSelectorsComponent = () => {
	const { root, c1, c2, c3, c4, c5, p1 } = getClassNames();

	return (
		<>
			<div className={root}>
				<div className={c1}>
					c1
				</div>
				<div className={c2}>
					c2
				</div>
				<div className={c3}>
					c3
				</div>
				<div className={p1}>
					<div className={c4}>
						c4
					</div>
					<div className={c5}>
						c5
					</div>
				</div>
			</div>
		</>
	)
	
}

export default CssSelectorsComponent