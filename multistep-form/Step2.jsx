import { useEffect, useState } from 'react';

const Step2 = ({
	nextStep,
	prevStep,
	formValues,
	handleChange,
	message,
	checkPassword,
}) => {
	useEffect(() => {
		checkPassword();
	}, [formValues.password, formValues.confirmPassword]);

	return (
		<>
			<label>Password</label>
			<input
				type="password"
				value={formValues.password}
				onChange={handleChange('password')}
			/>
			<label>Confirm Password</label>
			<input
				type="password"
				value={formValues.confirmPassword}
				onChange={handleChange('confirmPassword')}
			/>
			<p>{message}</p>

			<div className="flex-group">
				<button onClick={prevStep}>Prev</button>
				<button onClick={nextStep}>Next</button>
			</div>
		</>
	);
};

export default Step2;
