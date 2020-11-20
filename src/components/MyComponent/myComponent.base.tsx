import React from 'react'
import { IMyComponentProps, IMyComponentStyleProps, IMyComponentStyles } from './myComponent.types'
import { classNamesFunction } from '@fluentui/react'


const getClassNames = classNamesFunction<IMyComponentStyleProps, IMyComponentStyles>();

const Comp = ({ styles, theme }: IMyComponentProps) => {
	const classNames = getClassNames(styles, {
		theme
		// className: 'test11',
		// hasImportant: true
	});

	return (
		<div className={ classNames.root }>
			My first Styled Component
			<h1  className={`${classNames.myHeader}` }>my first header</h1>
			<p className={classNames.myParagrph}>My frist paragraph</p>
		</div>
	);
}

export default Comp

