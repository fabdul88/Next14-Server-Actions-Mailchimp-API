// https://nodejs.org/api/crypto.html#cryptorandombytessize-callback
const crypto = require('crypto');

export const newsletterSocialIcons: SocialIcons[] = [
  {
    id: crypto.randomBytes(20).toString('hex'),
    iconName: 'facebook',
    userName: 'johnsmith',
    iconDescription: 'facebook link icon',
    href: 'https://www.facebook.com/',
  },
  {
    id: crypto.randomBytes(20).toString('hex'),
    iconName: 'twitter',
    userName: '@Johnsmith',
    iconDescription: 'twitter link icon',
    href: 'https://twitter.com/?lang=en',
  },
  {
    id: crypto.randomBytes(20).toString('hex'),
    iconName: 'instagram',
    userName: 'smith_john',
    iconDescription: 'instagram link icon',
    href: 'https://www.instagram.com/',
  },
];
