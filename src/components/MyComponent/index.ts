import { styled } from '@uifabric/utilities';
import { IMyComponentProps, IMyComponentStyleProps, IMyComponentStyles } from './myComponent.types';

import MyComponent from './myComponent.base'
import {
	getTheme
} from "@fluentui/react";

const theme = getTheme();
const myComponentStyles = {
 	 root: [
		{
			color: theme.palette.themePrimary,
			fontSize: '30px'
		}
	],
	myHeader: [
		{
			fontSize: '50px'
		},
		{
			color: theme.palette.themeSecondary,
		}
	],
	myParagrph: [
		{
			color: theme.palette.themeSecondary,
			selectors: {
				':hover': {
					backgroundColor: 'green'
				}
			}
		}
	]
};

const MyComponentVariant = styled<IMyComponentProps, IMyComponentStyleProps, IMyComponentStyles>(
	MyComponent,
	myComponentStyles
);

export default MyComponentVariant