import * as React from 'react';
import { 
	TextField, 
	DefaultButton, 
	Dropdown, 
	DropdownMenuItemType, 
	IDropdownStyles, 
	IDropdownOption,
	initializeIcons
} from '@fluentui/react';
import * as yup from 'yup'
import { getValidationErrors } from '../utils/help'

initializeIcons();

const schema = yup.object().shape({
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
})

const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: { width: 300 },
};
  
const genderOptions: IDropdownOption[] = [
	{ key: 'male', text: 'Male'},
	{ key: 'female', text: 'Female' },
	{ key: 'other', text: 'Other' },
];

interface IValidationErrors {
	firstName?: string,
	lastName?: string,
	gender?: string
}

const formValidation = async (userInput, schema) => {
	let validationErrors: IValidationErrors = {}

	try {
		await schema.validate(userInput, {
			abortEarly: false
		});
	} catch(e) {
		validationErrors = getValidationErrors(e);
	} finally {
		return validationErrors
	}
}

const Form: React.FunctionComponent = () => {
	const [firstName, setFirstName] = React.useState('')
	const [lastName, setLastName] = React.useState('')
	const [gender, setGender] = React.useState('')
	const [validationErrors, setValidationErrors] = React.useState<IValidationErrors>({})

	

	const onSubmit = async () => {
		const userInput = {
			firstName,
			lastName,
			gender
		}

		const validationErrors = await formValidation(userInput, schema)
		setValidationErrors(validationErrors)
		console.log(validationErrors)

	};

	const handleFirstNameChange = async (_, value) => {
		
        setFirstName(value)
	};

	const handleFirstNameBlur = async () => {
		const userInput = { firstName }
		const validationErrors = await formValidation(userInput, schema)
		const firstNameValidationErrors = validationErrors.firstName
		setValidationErrors((validationErrors) => {
			return {
				...validationErrors,
				firstName: firstNameValidationErrors
			}
		})
	}
	
	const handleLastNameChange = (_, value) => {
        setLastName(value)
	};
	
	const handleLastNameBlur = async () => {
		const userInput = { lastName }
		const validationErrors = await formValidation(userInput, schema)
		const lastNameValidationErrors = validationErrors.lastName
		setValidationErrors((validationErrors) => {
			return {
				...validationErrors,
				lastName: lastNameValidationErrors
			}
		})
	}

	const handleDropdownChange = (_, option) => {
		console.log(option.key)
		setGender(option.key)
	}

	const handleGenderBlur = async () => {
		
		const userInput = { gender }
		const validationErrors = await formValidation(userInput, schema)
		const genderValidationErrors = validationErrors.gender
		setValidationErrors((validationErrors) => {
			return {
				...validationErrors,
				gender: genderValidationErrors
			}
		})
	}


	return (
		<form>
			{console.log(111, validationErrors)}
			<TextField
				label="First Name"
				name="firstName"
				value={firstName}
				onBlur={handleFirstNameBlur}
				onChange={handleFirstNameChange}
				errorMessage={validationErrors.firstName}
			/>
			<TextField
				label="Last Name"
				name="lastName"
				value={lastName}
				onBlur={handleLastNameBlur}
				onChange={handleLastNameChange}
				errorMessage={validationErrors.lastName}
			/>
			<Dropdown
				placeholder="Select an option"
				label="Gender"
				options={genderOptions}
				styles={dropdownStyles}
				// defaultSelectedKey ="other"
				onChange={handleDropdownChange}
				onBlur={handleGenderBlur}
				errorMessage={validationErrors.gender}
			/>
			<DefaultButton 
				text="Standard" 
				onClick={onSubmit}
			/>

		</form>
	);
};

export default Form
