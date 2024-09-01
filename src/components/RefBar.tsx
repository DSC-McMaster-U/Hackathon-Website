import BracketIcon from "../assets/BracketIcon.svg";
import MLHLogo from "../assets/MLHLogo.svg";

const pageSections = [
	{
		title: "About us",
		href: "about",
	},
	{
		title: "Sponsors",
		href: "sponsors",
	},
	{
		title: "Past Events",
		href: "events",
	},
	{
		title: "FAQ",
		href: "faq",
	},
];

const RefBar = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="fixed left-1/2 -translate-x-1/2 top-8 flex flex-row items-center w-fit gap-x-16 bg-googleGrey bg-opacity-10 backdrop-blur py-2 px-3 rounded-full border border-googleGrey">
			<a href="#hero" className="flex items-center">
				<img src={BracketIcon} alt="GDSC Bracket Icon" height={40} width={40} />
			</a>
			<div className="flex flex-row flex-1 gap-x-8 items-center">
				{pageSections.map((section) => (
					<button
						key={section.href}
						onClick={() => scrollToSection(section.href)}
						className="cursor-pointer text-lg"
					>
						{section.title}
					</button>
				))}
			</div>
			<a
				href="https://mlh.io/"
				target="_blank"
				rel="noreferrer"
				className="flex items-center"
			>
				<img src={MLHLogo} alt="MLH Logo" height={40} width={40} />
			</a>
		</div>
	);
};

export default RefBar;
