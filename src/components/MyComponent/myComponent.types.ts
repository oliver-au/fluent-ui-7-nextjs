import { IStyle, ITheme, IStyleFunctionOrObject } from '@fluentui/react'


export interface IMyComponentProps {
	styles?: IStyleFunctionOrObject<IMyComponentStyleProps, IMyComponentStyles>;
	theme?: ITheme;
  }

export interface IMyComponentStyleProps {
	theme: ITheme; // note that this is required
	// className?: string;
	// hasImportant: boolean;
	// somePropThatDrivesDesign: IComponentVariants;
  }  

export interface IMyComponentStyles {
	root: IStyle
	myHeader: IStyle
	myParagrph: IStyle
}