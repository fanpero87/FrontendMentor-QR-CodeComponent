/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		extend: {
			screens: {
				mobile: '375px', // => @media (min-width: 375px) { ... }
				desktop: '1440px', // => @media (min-width: 1440px) { ... }
			},
			colors: {
				'qr-white': 'hsl(0, 0%, 100%)',
				'qr-light-gray': 'hsl(212, 45%, 89%)',
				'qr-grayish-blue': 'hsl(220, 15%, 55%)',
				'qr-dark-blue': 'hsl(218, 44%, 22%)',
			},
			fontSize: {
				'qr-font-size': '15px',
			},
			fontFamily: {
				outfit: 'Outfit, sans-serif',
			},
		},
	},
	plugins: [],
};
