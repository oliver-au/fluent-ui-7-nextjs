import React from 'react';
import { useField, Form, FormikProps, Formik, FieldHookConfig } from 'formik';
import { 
	TextField, 
	DefaultButton, 
	Dropdown, 
	IDropdownStyles, 
	IDropdownOption,
	initializeIcons,
	Checkbox
} from '@fluentui/react';
import * as Yup from 'yup';

initializeIcons();

const SignupSchema = Yup.object().shape({
	firstName: Yup
		.string()
		.label("First Name")
		.required(),
	lastName: Yup
		.string()
		.label("Last Name")
		.required(),
	email: Yup
		.string()
		.label("Email")
		.required(),	
	// gender: Yup
	// 	.string()
	// 	.label("Gender")
	// 	.required(),	
});

const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: { width: 300 },
};
  
const genderOptions: IDropdownOption[] = [
	{ key: 'male', text: 'Male'},
	{ key: 'female', text: 'Female' },
	{ key: 'other', text: 'Other' },
];

interface Values {
	firstName: string;
	lastName: string;
	email: string;
	gender: string;
	accept: boolean
}

type BaseTextFieldProps = FieldHookConfig<string> & {
	label: string
};

const BaseTextField = (props: BaseTextFieldProps) => {
	const [field, meta, helpers] = useField(props);
	const {label, name, type } = props
	return (
		<>
			<TextField 
				{...field} 
				label={label} 
				name={name} 
				type={type} 
			/>
			
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

type BaseDropdownProps = FieldHookConfig<string> & {
	name: string
	label: string
	placeholder: string
	options: IDropdownOption[]
	defaultSelectedKey: string
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
};

const BaseDropdown = (props: BaseDropdownProps) => {
	const [field, meta, helpers] = useField(props)
	const { name, label, placeholder, options, defaultSelectedKey, setFieldValue } = props
	return (
		<>
			<Dropdown
				{...field}
				placeholder={placeholder}
				label={label}
				options={options}
				styles={dropdownStyles}
				defaultSelectedKey={defaultSelectedKey}
				onChange={(event, option) => {
					const value = option.key
					setFieldValue(name, value)
					return field.onChange
				}}
			/>
		</>
	);
};

type BaseCheckboxProps = FieldHookConfig<string> & {
	label: string
	name: string
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
	defaultChecked: boolean
};

const BaseCheckbox = (props: BaseCheckboxProps) => {
	const [field, meta, helpers] = useField(props);
	const { label, name, defaultChecked, setFieldValue } = props
	return (
		<>
			<Checkbox 
				{...field} 
				label={label} 
				name={name}
				defaultChecked={defaultChecked}
				onChange={(event, isChecked) => {
					console.log(1, name, isChecked)
					setFieldValue(name, isChecked)
				}}
			/>
		</>
	);
};



const Example = () => {
	console.log('fresh')
	return (
		<div>
			<h1>My Form</h1>
			<Formik
				initialValues={{
					email: '',
					firstName: 'red',
					lastName: '',
					gender: 'male',
					accept: true
				}}
				validationSchema={SignupSchema}
				onSubmit={(values, actions) => {
					setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{(props: FormikProps<Values>) => (
					<Form>
						<BaseTextField name="firstName" type="text" label="First Name" />
						<BaseTextField name="lastName" type="text" label="Last Name" />
						<BaseTextField name="email" type="email" label="Email" />
						<BaseDropdown
							name="gender"
							placeholder="Select an option"
							label="Gender"
							options={genderOptions}
							defaultSelectedKey="male"
							setFieldValue={props.setFieldValue}
						/>
						<BaseCheckbox 
							label="Accept"
							name="accept"
							defaultChecked={true}
							setFieldValue={props.setFieldValue}
						/>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
};


export default Example