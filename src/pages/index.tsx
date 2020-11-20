import * as React from "react";
import {
  Checkbox,
  ColorPicker,
  createTheme,
  Dropdown,
  IDropdownOption,
  DropdownMenuItemType,
  IDropdownStyles,
  initializeIcons,
  PrimaryButton,
  Slider,
  TextField,
  Toggle,
  getTheme
} from "@fluentui/react";

// The parameters in initializeIcons can disable the warnings for icons have already been registered.
initializeIcons(undefined, { disableWarnings: true });

const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: { width: 300 },
};

const theme = getTheme();
const textFieldStyles = {
	fieldGroup: [
		{
			backgroundColor: theme.palette.themePrimary,
		}
	]
};

const options: IDropdownOption[] = [
	{ key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
	{ key: 'apple', text: 'Apple' },
	{ key: 'banana', text: 'Banana' },
	{ key: 'orange', text: 'Orange', disabled: true },
	{ key: 'grape', text: 'Grape' },
	{ key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
	{ key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
	{ key: 'broccoli', text: 'Broccoli' },
	{ key: 'carrot', text: 'Carrot' },
	{ key: 'lettuce', text: 'Lettuce' },
];

const Home = () => {
	return (
		<div>
			<PrimaryButton>Hello, world</PrimaryButton>
			<Toggle defaultChecked label="Hello" />
			<TextField defaultValue="hello" className={'ttest111'} styles={textFieldStyles}/>
			<Dropdown
				placeholder="Select an option"
				label="Basic uncontrolled example"
				options={options}
				styles={dropdownStyles}
			/>
			<Checkbox defaultChecked label="Hello" />
			<Slider defaultValue={50} max={100} />
		</div>
		
	)
}

export default Home
