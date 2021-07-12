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
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		variants: {
			extend: {
				mixBlendMode: ['hover', 'focus'],
			},
		},
	},
};
