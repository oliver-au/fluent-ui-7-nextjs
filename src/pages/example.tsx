import React from 'react'
import MyStyledComponent from '../components/MyStyledComponent'
import { mergeStyleSets } from '@uifabric/merge-styles';

export interface IComponentClassNames {
	root: string;
}

const getClassNames = (): IComponentClassNames => {
	
	return mergeStyleSets({
		root: {
			fontFamily: 'Proxima Nova'
		},
	});
};

const Example = () => {
	const { root } = getClassNames();

	return (
		<div className={root}>
			<h1>My Customizing Component Example</h1>
			<MyStyledComponent/>
			<MyStyledComponent/>
			<MyStyledComponent/>
		</div>
	)
}

export default Example