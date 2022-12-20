import React from 'react';

const Step4 = ({ formValues }) => {
	const { username, password, email, phoneNumber, address } = formValues;

	return (
		<>
			<h1>{username}, You're now registered for awesome content!!</h1>
			<p>An email confirmation has been sent to {email}</p>
			<p>We can contact you at {phoneNumber} </p>
			<p>Any information will be sent to {address}</p>
		</>
	);
};

export default Step4;
