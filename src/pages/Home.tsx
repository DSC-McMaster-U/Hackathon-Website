import Page from "../components/Page";
import RefBar from "../components/RefBar";

const Hero = () => {
	return (
		<div
			id="hero"
			className="flex flex-col justify-center items-center h-screen"
		>
			<h1 className="text-4xl font-bold">GDSC</h1>
			<p className="text-lg">Google Developer Student Clubs</p>
		</div>
	);
};

const About = () => {
	return (
		<div
			id="about"
			className="flex flex-col justify-center items-center h-screen"
		>
			<h1 className="text-4xl font-bold">About</h1>
			<p className="text-lg">Learn about us</p>
		</div>
	);
};

const Sponsors = () => {
	return (
		<div
			id="sponsors"
			className="flex flex-col justify-center items-center h-screen"
		>
			<h1 className="text-4xl font-bold">Sponsors</h1>
			<p className="text-lg">Our sponsors</p>
		</div>
	);
};

const Events = () => {
	return (
		<div
			id="events"
			className="flex flex-col justify-center items-center h-screen"
		>
			<h1 className="text-4xl font-bold">Events</h1>
			<p className="text-lg">Past events</p>
		</div>
	);
};

const FAQ = () => {
	return (
		<div
			id="faq"
			className="flex flex-col justify-center items-center h-screen"
		>
			<h1 className="text-4xl font-bold">FAQ</h1>
			<p className="text-lg">Frequently asked questions</p>
		</div>
	);
};

const Home = () => {
	return (
		<>
			<RefBar />
			<Hero />
			<About />
			<Sponsors />
			<Events />
			<FAQ />
		</>
	);
};

export default Home;
