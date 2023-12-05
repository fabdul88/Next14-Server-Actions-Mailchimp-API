// https://nodejs.org/api/crypto.html#cryptorandombytessize-callback
const crypto = require('crypto');

export const inputType: FormInputTypes[] = [
  {
    id: crypto.randomBytes(20).toString('hex'),
    labelHtmlFor: 'first name',
    labelName: 'First Name',
    inputType: 'text',
    inputName: 'first-name',
    inputId: 'first name',
    inputPlaceholder: 'e.g. John...',
  },
  {
    id: crypto.randomBytes(20).toString('hex'),
    labelHtmlFor: 'last name',
    labelName: 'Last Name',
    inputType: 'text',
    inputName: 'last-name',
    inputId: 'last name',
    inputPlaceholder: 'e.g. Smith...',
  },
  {
    id: crypto.randomBytes(20).toString('hex'),
    labelHtmlFor: 'email-address',
    labelName: 'Email Address',
    inputType: 'text',
    inputName: 'email',
    inputId: 'email-address',
    inputPlaceholder: 'your@email.com',
  },
];
