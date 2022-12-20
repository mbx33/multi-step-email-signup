import React from 'react';

const Step1 = ({ nextStep, prevStep, formValues, handleChange }) => {
	return (
		<>
			<label>Email</label>
			<input
				type="email"
				value={formValues.email}
				onChange={handleChange('email')}
			/>
			<label>Username</label>
			<input
				type="text"
				value={formValues.username}
				onChange={handleChange('username')}
			/>
			<div className="flex-group">
				<button onClick={prevStep} disabled>
					Prev
				</button>
				<button onClick={nextStep}>Next</button>
			</div>
		</>
	);
};

export default Step1;
