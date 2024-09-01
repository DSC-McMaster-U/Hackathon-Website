/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				googleBlue: "#174EA6",
				googleRed: "#A50E0E",
				googleOrange: "#E37400",
				googleGreen: "#0D652D",
				googleMediumBlue: "#4285F4",
				googleMediumRed: "#EA4335",
				googleYellow: "#FBBC04",
				googleMediumGreen: "#34A853",
				googleLightBlue: "#D2E3FC",
				googleLightRed: "#FAD2CF",
				googleLightYellow: "#FEEFC3",
				googleLightGreen: "#CEEAD6",
				googleLightGrey: "#F1F3F4",
				googleGrey: "#9AA0A6",
				googleBlack: "#202124",
			},
		},
	},
	plugins: [],
};
