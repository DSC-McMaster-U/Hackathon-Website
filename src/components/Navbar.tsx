import BracketIcon from "../assets/branding/BracketIcon.svg";
import { pageSections } from "../constants/pages";
import { scrollToSection } from "../utils/scroll";
import { socialMedia } from "../constants/socialMedia";
import { SiIconFromName } from "../utils/icon";

const Navbar = () => {
	return (
		<div className="z-50 fixed left-1/2 -translate-x-1/2 top-8 flex flex-row items-center gap-x-16 bg-googleGrey bg-opacity-10 backdrop-blur py-2 px-3 rounded-full border border-googleGrey">
			<button
				onClick={() => scrollToSection("hero")}
				className="flex items-center h-fit w-fit"
			>
				<img src={BracketIcon} alt="GDSC Bracket Icon" className="h-5 w-auto" />
			</button>
			<div
				id="internal-links"
				className="flex flex-row flex-1 gap-x-8 items-center h-full"
			>
				{pageSections.map((section) => (
					<button
						key={section.href}
						onClick={() => scrollToSection(section.href)}
						className="whitespace-nowrap cursor-pointer text-lg border-b-2 border-transparent hover:border-b-2 hover:border-googleGrey transition-all duration-200"
					>
						{section.title}
					</button>
				))}
			</div>
			<div id="socials" className="flex flex-row gap-x-4 h-fit w-fit">
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
							className="h-5 w-auto hover:text-googleGrey duration-300 transition-colors"
						/>
					</a>
				))}
			</div>
		</div>
	);
};

export default Navbar;
