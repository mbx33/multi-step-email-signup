import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import './form.css';

//Top level of a form with multiple steps

//form will have 4 steps with the last step being a submit button
//the first step will be a user entering a username, password, and email
//the second step will be a user entering their phone Number
//the third step will be a user entering their address

const Form = () => {
	const [step, setStep] = useState(1);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');

	const [message, setMessage] = useState('');

	const handleChange = (input) => (e) => {
		switch (input) {
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			case 'confirmPassword':
				setConfirmPassword(e.target.value);
				break;
			case 'email':
				setEmail(e.target.value);
				break;
			case 'phoneNumber':
				setPhoneNumber(e.target.value);
				break;
			case 'address':
				setAddress(e.target.value);
				break;
			default:
				break;
		}
	};

	const checkPassword = () => {
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
			return false;
		} else {
			setMessage('');
			return true;
		}
	};

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		if (step === 1) return;
		setStep(step - 1);
	};

	return (
		<div>
			<h1>Multi Step Form</h1>
			{/* <h2>Step {step}</h2> */}
			{/* //this is the progress bar */}
			<div className="progress-container">
				<div
					className={
						step === 2
							? 'progress active-2'
							: step === 3
							? 'progress active-3'
							: step === 4
							? 'progress active-4'
							: 'progress'
					}
					id="progress"
				></div>
				<div className="circle active">1</div>
				<div className={step > 1 ? 'circle active' : 'circle'}>2</div>
				<div className={step > 2 ? 'circle active' : 'circle'}>3</div>
				<div className={step > 3 ? 'circle active' : 'circle'}>4</div>
			</div>

			{/* //this is the form */}
			<form>
				{step === 1 && (
					<Step1
						nextStep={nextStep}
						prevStep={prevStep}
						formValues={{ username, email }}
						handleChange={handleChange}
					/>
				)}
				{step === 2 && (
					<Step2
						nextStep={nextStep}
						prevStep={prevStep}
						formValues={{ password, confirmPassword }}
						handleChange={handleChange}
						checkPassword={checkPassword}
						message={message}
					/>
				)}
				{step === 3 && (
					<Step3
						nextStep={nextStep}
						prevStep={prevStep}
						formValues={{ phoneNumber, address }}
						handleChange={handleChange}
					/>
				)}
				{step === 4 && (
					<Step4
						formValues={{ username, email, password, phoneNumber, address }}
					/>
				)}
			</form>
		</div>
	);
};

export default Form;
