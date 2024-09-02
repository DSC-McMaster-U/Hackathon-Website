import { ReactNode } from "react";

interface SectionProps {
	children: ReactNode;
	className?: string;
	id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
	return (
		<section className={`${className} pt-24 pb-16`} id={id}>
			{children}
		</section>
	);
};

export default Section;
