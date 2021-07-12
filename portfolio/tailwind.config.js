module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				profile: "url('./components/Home/IMG_0103.jpg')",
			}),
		},
		fontFamily: { welcome: ['Catamaran', 'sans-serif'] },
		plugins: [require('@tailwindcss/forms')],
	},
	variants: {
		extend: {
			mixBlendMode: ['hover', 'focus'],
		},
	},
	plugins: [],
};
