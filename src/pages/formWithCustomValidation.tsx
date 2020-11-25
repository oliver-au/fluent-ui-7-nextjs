import * as React from 'react';
import { 
	TextField, 
	DefaultButton, 
	Dropdown, 
	IDropdownStyles, 
	IDropdownOption,
	initializeIcons
} from '@fluentui/react';
import * as yup from 'yup'
import { useFormik } from 'formik';

initializeIcons();


const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: { width: 300 },
};
  
const genderOptions: IDropdownOption[] = [
	{ key: 'male', text: 'Male'},
	{ key: 'female', text: 'Female' },
	{ key: 'other', text: 'Other' },
];

const Form: React.FunctionComponent = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			gender: ''
		},
		validationSchema: yup.object({
			firstName: yup
				.string()
				.label("First Name")
				.required(),
			lastName: yup
				.string()
				.label("Last Name")
				.required(),
			gender: yup
				.string()
				.label("Gender")
				.required(),	
		}),
		onSubmit: values => {
		  	alert(JSON.stringify(values, null, 2));
		},
	});


	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				label="First Name"
				name="firstName"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
				errorMessage={formik.touched.firstName && formik.errors.firstName}
			/>
			<TextField
				label="Last Name"
				name="lastName"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.lastName}
				errorMessage={formik.touched.lastName && formik.errors.lastName}
			/>
			<Dropdown
				placeholder="Select an option"
				label="Gender"
				options={genderOptions}
				styles={dropdownStyles}
				errorMessage={formik.touched.gender && formik.errors.gender}
				onBlur={() => formik.setFieldTouched('gender')}
				onChange={(event, option) => formik.setFieldValue('gender', option.key)}
			/>
			<DefaultButton 
				text="Standard" 
				type="submit"
			/>

		</form>
	);
};

export default Form
