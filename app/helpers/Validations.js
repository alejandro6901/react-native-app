import { validateAll, validations } from 'indicative/validator';

const rules = {
	register: {
		email: 'required|email',
		password: 'required|confirmed',
		password_confirmation: 'required'
	}
};

const msg = {
	register: {
		required: (field) => `${formatMessage(field)} is required`,
		'email.email': 'Not a valid email',
		'password.confirmed': "Passwords don't match"
	}
};

function formatMessage(message) {
	return message.charAt(0).toUpperCase() + message.slice(1);
}

export async function validate(data, formName) {
	let err = {};
	switch (formName) {
		case 'register':
			try {
				await validateAll(data, rules.register, msg.register).then(console.log);
				return err;
			} catch (e) {
				e.map((element) => {
					err[element.field] = element.message;
				});
				return err;
			}
			break;
	}
}
