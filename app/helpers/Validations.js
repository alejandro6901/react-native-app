import { validateAll } from 'indicative/validator';

const rules = {
  register: {
    email: 'required|email',
    password: 'required|confirmed',
    password_confirmation: 'required'
  },
  login: {
    email: 'required|email',
    password: 'required'
  }
};

const msg = {
  register: {
    required: (field) => `${formatMessage(field)} is required`,
    'email.email': 'Not a valid email',
    'password.confirmed': "Passwords don't match"
  },
  login: {
    required: (field) => `${formatMessage(field)} is required`,
    'email.email': 'Not a valid email'
  }
};

function formatMessage(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
}

async function validateAllFields(data, rules, msg) {
  let err = {};
  try {
    await validateAll(data, rules, msg).then(console.log);
    return err;
  } catch (e) {
    e.map((element) => {
      err[element.field] = element.message;
    });
    return err;
  }
}

export async function validate(data, formName) {
  switch (formName) {
    case 'register':
      return await validateAllFields(data, rules.register, msg.register);
    case 'login':
      return await validateAllFields(data, rules.login, msg.login);
  }
}
