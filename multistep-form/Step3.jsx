import React from 'react';

const Step3 = ({ nextStep, prevStep, formValues, handleChange }) => {
	return (
		<>
			<label>Phone Number</label>
			<input
				type="text"
				value={formValues.phoneNumber}
				onChange={handleChange('phoneNumber')}
			/>
			<label>Address</label>
			<input
				type="text"
				value={formValues.address}
				onChange={handleChange('address')}
			/>
			<div className="flex-group">
				<button onClick={prevStep}>Prev</button>
				<button type="submit" onClick={nextStep}>
					Submit
				</button>
			</div>
		</>
	);
};

export default Step3;
