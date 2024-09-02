import BracketIcon from "../assets/branding/BracketIcon.svg";
import { pageSections } from "../constants/pages";
import { scrollToSection } from "../utils/scroll";
import { socialMedia } from "../constants/socialMedia";
import { SiIconFromName } from "../utils/icon";

const Footer = () => {
	const resources = [
		{ title: "GDSC McMaster U", href: "https://gdscmcmasteru.ca/" },
		{
			title: "Solution Challenge",
			href: "https://developers.google.com/community/dsc-solution-challenge",
		},
		{ title: "UN Sustainability Goals", href: "https://sdgs.un.org/goals" },
	];

	return (
		<footer
			id="footer"
			className="flex flex-row justify-between items-start bg-googleGrey border border-googleGrey bg-opacity-10 w-full px-32 py-16 gap-y-8 h-auto"
		>
			<div
				id="info"
				className="flex flex-col justify-between items-start gap-y-4"
			>
				<button onClick={() => scrollToSection("hero")}>
					<img
						src={BracketIcon}
						alt="GDSC Bracket Icon"
						className="h-10 w-auto"
					/>
				</button>
				<div id="socials" className="flex flex-row gap-x-4">
					{socialMedia.map((media) => (
						<a
							id={media.name.toLowerCase() + "-link"}
							key={media.name}
							href={media.url}
							target="_blank"
							rel="noreferrer"
							className="flex items-center"
						>
							<SiIconFromName
								icon={media.icon}
								className="h-6 w-auto hover:text-googleGrey duration-300 transition-colors"
							/>
						</a>
					))}
				</div>
			</div>

			<div
				id="links"
				className="flex flex-row justify-between items-start gap-x-16 h-full"
			>
				<div id="pages" className="flex flex-col gap-y-2">
					<h4>Pages</h4>
					<div
						id="internal-links"
						className="flex flex-col gap-y-1 justify-start items-start"
					>
						{pageSections.map((section) => (
							<button
								key={section.href}
								onClick={() => scrollToSection(section.href)}
								className="whitespace-nowrap cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-googleGrey transition-all duration-200"
							>
								{section.title}
							</button>
						))}
					</div>
				</div>
				<div id="resources" className="flex flex-col gap-y-2">
					<h4>Resources</h4>
					<div
						id="internal-links"
						className="flex flex-col gap-y-1 justify-start items-start"
					>
						{resources.map((section) => (
							<a
								href={section.href}
								className="whitespace-nowrap cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-googleGrey transition-all duration-200"
							>
								{section.title}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
