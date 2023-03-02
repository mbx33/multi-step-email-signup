const nodemailer = require('nodemailer');

module.exports = {
	postEmail: (req, res) => {
		console.log(req.body);
		const { firstname, lastname, email, number, session, date, time } = req.body;
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'ashleyallysephoto@gmail.com',
				pass: 'serquozxjeodtwbr',
			},
		});

		const mailOptions = {
			from: email,
			to: 'ashleyallysephoto@gmail.com',
			subject: `New photo session for ${firstname}`,
			text: ` 
        
        NEW PHOTO SESSION FOR:
            First Name: ${firstname}
            Last Name: ${lastname}
            Email: ${email}
            Phone Number: ${number}
            Session Type: ${session}
            Date: ${date}
            Time: ${time}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				res.send('error');
			} else {
				console.log('Email sent: ' + info.response);
				res.send('email sent successfully');
			}
		});
	},
};
