import Accordion from "@/components/accordion/accordion";
import Carousel from "@/components/carousel/carousel";

export default function ComponentsLib() {
	// dummy data for the components
	//accordion
	const FAQ = [
		"Where is it right now?",
		"How can I renew my subscripsion?",
		"Where is your company's location?",
	];
	return (
		<main>
			{FAQ.map((item) => (
				<Accordion key={item} index={FAQ.indexOf(item) + 1} question={item} />
			))}
			<Carousel />
		</main>
	);
}
